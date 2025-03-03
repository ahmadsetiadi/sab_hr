// routes/attendance.js
const ExcelJS = require('exceljs');
const express = require('express');
const router = express.Router();
const { authenticateToken  } = require('./../utils/jwt');
const { getEmployeeIds, sendEmailWithAttachment } = require('./../routes/global'); 
const Employee = require('./../models/m_employee');
const v_attendance = require('./../models/v_attendance');

const { Op } = require('sequelize');

router.get('/export-to-excel', async (req, res) => {
    try {
      console.log("starting export to excel");

      const { search, username, startdate, enddate, sendemail }= req.query;
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
          whereConditions.push({
              tdate: {
                  [Op.gte]: startdate // Greater than or equal to startdate
              }
          });
          whereConditions.push({
              tdate: {
                  [Op.lte]: enddate // Less than or equal to enddate
              }
          });
       }
        
        const att = await v_attendance.findAll({
            where: whereConditions,
            order: [['name', 'ASC'], ['tdate', 'ASC']] 
        });

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
        { header: 'Status', key: 'status', width: 20 },
        { header: 'Timein', key: 'timein', width: 20 },
        { header: 'Timeout', key: 'timeout', width: 20 },
        { header: 'Workhour', key: 'workhour', width: 20 },
        { header: 'Late Minutes', key: 'lateminutes', width: 20 },
        { header: 'Earlyout Minutes', key: 'earlyoutminutes', width: 20 },
        { header: 'Meal', key: 'getmakan', width: 20 },
        { header: 'Overtime Hour', key: 'overtimehour', width: 20 },
        { header: 'Overtime Amout', key: 'overtimeamount', width: 20 },
        { header: 'Company', key: 'company', width: 20 },
        { header: 'Department', key: 'department', width: 20 },
        { header: 'Position', key: 'position', width: 20 },
        { header: 'Employee Status', key: 'employeestatus', width: 20 },
      ];

      // Menambahkan data ke worksheet
      worksheet.addRows(att);

      // Mengatur header respons untuk download file Excel
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=attendance.xlsx');

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
        console.log("download data");
        await workbook.xlsx.write(res);
        res.end();
      };      
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saat mengambil data dari database atau menulis file Excel');
    }
  });

  module.exports = router;


