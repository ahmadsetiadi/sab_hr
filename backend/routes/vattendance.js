// routes/attendance.js
const ExcelJS = require('exceljs');
const express = require('express');
const router = express.Router();
const { authenticateToken  } = require('./../utils/jwt');
const { getEmployeeIds, sendEmailWithAttachment } = require('./../routes/global'); 
const Employee = require('./../models/m_employee');
const v_attendance = require('./../models/v_attendance');
const t_finger = require('./../models/t_finger');
const axios = require("axios");

const { Op, literal  } = require('sequelize');

// Fungsi untuk reverse geocoding
async function getAddress(lat, lon) {
  try {
    const response = await axios.get("https://nominatim.openstreetmap.org/reverse", {
      params: {
        lat,
        lon,
        format: "json"
      },
      headers: {
        "User-Agent": "your_email@example.com" // Ganti dengan email Anda
      }
    });
    return response.data.display_name || "";
  } catch (error) {
    console.error(`Error reverse geocoding lat=${lat}, lon=${lon}:`, error.message);
    return "";
  }
}

router.get('/autofill-address', async (req, res) => {
    try {
      const locations = req.body;

      if (!Array.isArray(locations)) {
        return res.status(400).json({ error: "Body harus berupa array of {finger_id, lat, lon, address}" });
      }

      const result = [];

      for (let i = 0; i < locations.length; i++) {
        const { finger_id, lat, lon } = locations[i];
        if (typeof lat !== "number" || typeof lon !== "number") {
          result.push({ finger_id, lat, lon, address: "" });
          continue;
        }

        // OPTIONAL: Delay agar tidak diblok Nominatim
        await new Promise(resolve => setTimeout(resolve, 1000));

        const address = await getAddress(lat, lon);
        result.push({ finger_id, lat, lon, address });
      }

      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saat mengambil data dari database atau menulis file Excel');
    }
});

router.get('/export-to-excel', async (req, res) => {
    try {
      console.log("starting export to excel");

      const { search, username, sendemail, base64 }= req.query;

      const startdate = req.query.startdate + ' 00:00:00';
      const enddate = req.query.enddate + ' 23:59:59';

      let whereConditions = [];
  
        const employee = await Employee.findOne({ where: { username: username}});
        let email = "";
        if (employee) {
          if (employee.email!="") {
            email = employee.email;
          }
        }
  
        const employeeIds = await getEmployeeIds(username); //console.log(employeeIds)
        if (employeeIds && employeeIds.length > 0) {        
          whereConditions.push({
              employee_id: {
                  [Op.in]: employeeIds // Assuming you are searching by name
              }
          });
        }
  
        if (search) {
          whereConditions.push({  
            [Op.or]: [  
                { name: { [Op.like]: `%${search}%` } }, // Mencari berdasarkan name  
            ]  
          });
        }
    
        if (startdate && enddate) {
          whereConditions.push(
            literal(`tdate >= '${startdate}'`)
          );
          whereConditions.push(
            literal(`tdate <= '${enddate}'`)
          );
          // whereConditions.push({
          //     tdate: {
          //         [Op.gte]: startdate
          //     }
          // });
          // whereConditions.push({
          //     tdate: {
          //         [Op.lte]: enddate
          //     }
          // });
        }

      //  const activeEmployees = await Employee.findAll({
      //         attributes: ['employee_id'],
      //         where: {
      //           status_active: 1
      //         }
      //       });      
      //       const activeEmployeeIds = activeEmployees.map(emp => emp.employee_id);
      
      
            whereConditions.push({
              employee_id: {
                  [Op.notIn]: [1] // Less than or equal to enddate
              }
            });
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

        const att = await t_finger.findAll({
            where: whereConditions,
            order: [['name', 'ASC'], ['tdate', 'ASC'], ['ttime', 'ASC']] 
        });
        console.log(whereConditions);
        // console.log(att);
        // console.log(att.length);
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    //   const results = await Attendance.findAll();

      // Membuat workbook dan worksheet baru
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Attendance');

    //   a.timein, a.timeout, a.workhour, a.lateminutes, a.earlyoutminutes,
    // a.getmakan, a.overtimehour, a.overtimeamount,
    // c.name as company, d.name as department, p.name as position, es.name as employeestatus,

      // Menambahkan header kolom
      worksheet.columns = [
        { header: 'NIP', key: 'nip', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'Date', key: 'tdate', width: 20 },        
        { header: 'Time', key: 'ttime', width: 20 },

        { header: 'Latitude', key: 'latitude', width: 20 },
        { header: 'Longitude', key: 'longitude', width: 20 },
        { header: 'Address', key: 'fulladdress', width: 20 }

        // { header: 'Earlyout Minutes', key: 'earlyoutminutes', width: 20 },
        // { header: 'Meal', key: 'getmakan', width: 20 },
        // { header: 'Overtime Hour', key: 'overtimehour', width: 20 },
        // { header: 'Overtime Amout', key: 'overtimeamount', width: 20 },
        // { header: 'Company', key: 'company', width: 20 },
        // { header: 'Department', key: 'department', width: 20 },
        // { header: 'Position', key: 'position', width: 20 },
        // { header: 'Employee Status', key: 'employeestatus', width: 20 },
      ];

      console.log("length:");
      console.log(att.length);
      // Menambahkan data ke worksheet
      worksheet.addRows(att);

      // Mengatur header respons untuk download file Excel
      

      // Menulis workbook ke respons
      // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      const filePath = './attendance_data.xlsx';  
      

      console.log(email);
      console.log(sendemail);
      if (sendemail!=1) {
        console.log("aa");
        email = "";
      }

      if (email!="") {
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=attendance.xlsx');
            console.log("send email");
            await workbook.xlsx.writeFile(filePath); 
            const recipientEmail = email; // Ganti dengan email penerima  
            const subject = 'Sinar HR - Attendance Data Export';  
            const text = 'Period '+ startdate + ' to '+ enddate + '. Please find the attached attendance data.';  
            const emailResponse = await sendEmailWithAttachment(recipientEmail, subject, text, filePath);  
            console.log("done send email");
            res.status(200).json({ 
              message: 'sent to email: '+recipientEmail, 
              datasource: att   
            });
      } else {
            if (base64==1) {
                const buffer = await workbook.xlsx.writeBuffer();
                const base64String = buffer.toString('base64');

                return res.status(200).json({
                  filename: 'attendance.xlsx',
                  filedata: base64String,
                  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                });
            } else {
                // versi WEB
                res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                res.setHeader('Content-Disposition', 'attachment; filename=attendance.xlsx');
                console.log("download data");
                await workbook.xlsx.writeFile('usr/src/app/Aplikasi_HR/Attendance/attendance.xlsx'); 
                //await workbook.xlsx.writeFile('./../../../homes/ardiansyah/Aplikasi_HR/Attendance/attendance.xlsx'); 
                await workbook.xlsx.write(res);
                res.end();
                // versi WEB
            }
      };      
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saat mengambil data dari database atau menulis file Excel');
    }
  });

  module.exports = router;


