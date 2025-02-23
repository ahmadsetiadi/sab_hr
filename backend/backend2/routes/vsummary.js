// routes/attendance.js
const ExcelJS = require('exceljs');
const XlsxPopulate = require('xlsx-populate');
const express = require('express');
const router = express.Router();
const { authenticateToken  } = require('./../../utils/jwt');
const { getEmployeeIds, sendEmailWithAttachment } = require('./../../routes/global'); 
const Employee = require('./../../models/m_employee');
const v_summary = require('./../../models/v_summary');
// const v_attendance = require('./../../models/v_attendance');

const { Op } = require('sequelize');

router.get('/export-to-excel', async (req, res) => {
    try {
      console.log("starting export to excel");

      const { search, username, startdate, enddate, sendemail }= req.query;
      // console.log(startdate);
      
      // let enddate = edate;
      // let endDateObj = new Date(edate);
      // endDateObj.setHours(endDateObj.getHours() + 8);
      // console.log(endDateObj);
      // const updatedEndDate = endDateObj.toISOString().slice(0, 19).replace('T', ' ');
      // enddate = updatedEndDate;
      // console.log(enddate);

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
        
        const sum = await v_summary.findAll({
            where: whereConditions,
            order: [['tdate', 'ASC'], ['name', 'ASC']] 
        });

    //   const results = await Attendance.findAll();

      // Membuat workbook dan worksheet baru
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Payroll');

    //   a.timein, a.timeout, a.workhour, a.lateminutes, a.earlyoutminutes,
    // a.getmakan, a.overtimehour, a.overtimeamount,
    // c.name as company, d.name as department, p.name as position, es.name as employeestatus,

      // Menambahkan header kolom
      worksheet.columns = [
          // { header: 'Payroll ID', key: 'payroll_id', width: 20 },
          { header: 'Tgl Transfer', key: 'transferdate', width: 20 },
          { header: 'NIP', key: 'nip', width: 15 },
          { header: 'Karyawan', key: 'name', width: 30 },
          { header: 'Company', key: 'company', width: 20 },
          { header: 'Department', key: 'department', width: 20 },
          { header: 'Employeestatus', key: 'employeestatus', width: 20 },
          { header: 'Position', key: 'position', width: 20 },
          { header: 'Joindate', key: 'joindate', width: 20 },
          { header: 'Resigndate', key: 'resigndate', width: 20 },
          { header: 'No. Rekening', key: 'bankaccountnumber', width: 20 },
          { header: 'Nama Rekening', key: 'bankaccountname', width: 30 },
          { header: 'Bankname', key: 'bankname', width: 20 },
          { header: 'Gajipokok', key: 'gajipokok', width: 30 },
          { header: 'Uang Makan', key: 'uang_makan', width: 30 },
          { header: 'BPJS TK - JHT Company (3.7%)', key: 'tk_jhtcompany', width: 30 },
          { header: 'BPJS TK - JKK (0.24%)', key: 'tk_jkk', width: 30 },
          { header: 'BPJS TK - JKM (0.3%)', key: 'tk_jkm', width: 30 },

          { header: 'BPJS KS Company (4%)', key: 'ks_company', width: 30 },
          { header: 'P. BPJS TK JHT Company (3.7%)', key: 'p_tk_jhtcompany', width: 30 },
          { header: 'P. BPJS TK JHT Employee (2%)', key: 'p_tk_jhtemployee', width: 30 },
          { header: 'P. BPJS TK JKM (0.24%)', key: 'p_tk_jkk', width: 30 },
          { header: 'P. BPJS TK JKM (0.3%)', key: 'p_tk_jkm', width: 30 },
          { header: 'P. BPJS KS Company (4%)', key: 'p_ks_company', width: 30 },
          { header: 'P. BPJS KS Employee (1%)', key: 'p_ks_employee', width: 30 },
          { header: 'Takehomepay', key: 'takehomepay', width: 30 },
          { header: 'Company ID', key: 'tdate', width: 20 },
          { header: 'Department ID', key: 'startdate', width: 20 },
          { header: 'Position ID', key: 'enddate', width: 20 },
          { header: 'Employeestatus ID', key: 'ptkp', width: 20 },
          { header: 'Company ID', key: 'npwpemployee', width: 20 },
          { header: 'Department ID', key: 'no_bpjstk', width: 20 },
          { header: 'Department ID', key: 'no_bpjsks', width: 20 },
          { header: 'Department ID', key: 'dob', width: 20 },
      ];

      // Menambahkan data ke worksheet
      worksheet.addRows(sum);

      // Mengatur header respons untuk download file Excel
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=attendance.xlsx');

      // Menulis workbook ke respons
      // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      const filePath = './summary_data.xlsx';  
      

      console.log(email);
      console.log(sendemail);
      if (sendemail!=1) {
        console.log("aa");
        email = "";
      }

      if (email!="") {
            console.log("send email");
            await workbook.xlsx.writeFile(filePath); 
    
            // Menggunakan xlsx-populate untuk menambahkan password
            // const workbookWithPassword = await XlsxPopulate.fromFileAsync(filePath);
            XlsxPopulate.fromFileAsync(filePath)
            .then(workbook => {
                return workbook.toFileAsync(filePath, { password: "81pay_sab19" });
            })
            .then(async () => {
                const recipientEmail = email; // Ganti dengan email penerima  
                const subject = 'Sinar HR - Payroll Summary';  
                const text = 'Period '+ enddate + '. Please find the attached attendance data.';  
                const emailResponse = await sendEmailWithAttachment(recipientEmail, subject, text, filePath);  
                console.log("done send email");
                res.status(200).json({ 
                  message: 'sent to email: '+recipientEmail, 
                  datasource: sum   
                });
            })
            .catch(err => {
                console.error('Error protecting file:', err);
                res.status(500).send('Error exporting to Excel');
            });

            // workbookWithPassword.protect("abcd");
            
            // // Menyimpan kembali file dengan password
            // await workbookWithPassword.toFileAsync(filePath);
            
            
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


