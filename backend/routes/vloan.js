const ExcelJS = require('exceljs');
const express = require('express');
const router = express.Router();
const { authenticateToken  } = require('./../utils/jwt');
const { getEmployeeIds, sendEmailWithAttachment } = require('./../routes/global'); 
const Employee = require('./../models/m_employee');
const v_loan = require('./../models/v_loan');

const { Op } = require('sequelize');

router.get('/export-to-excel', async (req, res) => {
    try {
      
      const { search, username, startdate, enddate, sendemail }= req.query;
      console.log(startdate);
      console.log(enddate);
      
      console.log("starting export to excel");


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

       const activeEmployees = await Employee.findAll({
              attributes: ['employee_id'],
              where: {
                status_active: 1
              }
            });      
            const activeEmployeeIds = activeEmployees.map(emp => emp.employee_id);
      
      
            whereConditions.push({
              employee_id: {
                  [Op.in]: activeEmployeeIds // Less than or equal to enddate
              }
            });
        
        const att = await v_loan.findAll({
            where: whereConditions,
            order: [['name', 'ASC'], ['tdate', 'ASC']] 
        });

      // Membuat workbook dan worksheet baru
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Loan');

    //   a.timein, a.timeout, a.workhour, a.lateminutes, a.earlyoutminutes,
    // a.getmakan, a.overtimehour, a.overtimeamount,
    // c.name as company, d.name as department, p.name as position, es.name as employeestatus,

      // Menambahkan header kolom
      worksheet.columns = [
        { header: 'NIP', key: 'nip', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'Date', key: 'tdate', width: 20 },
        { header: 'Total', key: 'total', width: 20 },
        { header: 'Tenor', key: 'bulan', width: 20 },
        { header: 'Amount', key: 'amount', width: 20 },
        { header: 'Sudah Bayar', key: 'sudahbayar', width: 20 },
        { header: 'Sisa', key: 'sisa', width: 20 },
        { header: 'Keterangan', key: 'keterangan', width: 20 },        
        { header: 'Company', key: 'company', width: 20 },
        { header: 'Department', key: 'department', width: 20 },
        { header: 'Position', key: 'position', width: 20 },
        { header: 'Employee Status', key: 'employeestatus', width: 20 },
      ];

      // Menambahkan data ke worksheet
      worksheet.addRows(att);

      // Mengatur header respons untuk download file Excel
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=loan.xlsx');

      // Menulis workbook ke respons
      // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      const filePath = './loan.xlsx';  
      

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
            const subject = 'Sinar HR - Loan Data Export';  
            const text = 'Period '+ startdate + ' to '+ enddate + '. Please find the attached loan data.';  
            const emailResponse = await sendEmailWithAttachment(recipientEmail, subject, text, filePath);  
            console.log("done send email");
            res.status(200).json({ 
              message: 'sent to email: '+recipientEmail, 
              datasource: att   
            });
      } else {
        console.log("download data");
        await workbook.xlsx.writeFile('./../../../homes/ardiansyah/Aplikasi_HR/Loan/loan.xlsx'); 
        await workbook.xlsx.write(res);
        res.end();
      };      
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saat mengambil data dari database atau menulis file Excel');
    }
  });

  module.exports = router;


