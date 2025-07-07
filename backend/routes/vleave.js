// routes/tCuti.js
const express = require('express');
const ExcelJS = require('exceljs');
const router = express.Router();
const TCuti = require('../models/t_cuti');
const moment = require('moment');

const { authenticateToken  } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');
const { Op } = require('sequelize');
const connection = require('./../config/db'); 
const { getEmployeeIds } = require('./global'); 
const VLeave = require('../models/v_leave');
const Employee = require('../models/m_employee');


// Get all t_cuti records
router.get('/', authenticateToken, async (req, res) => {
    try {
      const { search, username, startdate, enddate }= req.query;
      let whereConditions = [];
      whereConditions.push({
        status_deleted: 0
      });

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
            name: {
                [Op.like]: `%${search}%` // Assuming you are searching by name
            }
        });
      }

      if (startdate && enddate) {
        whereConditions.push({
            tdate: {
                [Op.gte]: new Date(startdate) // Greater than or equal to startdate
            }
        });
        whereConditions.push({
            tdate: {
                [Op.lte]: new Date(enddate) // Less than or equal to enddate
            }
        });
     }
      
      const tcutis = await TCuti.findAll({
          where: whereConditions
      });

      res.json(tcutis);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.get('/export/summary', async (req, res) => {
    try {
      console.log("starting export to excel");

      const { search, username, sendemail, tahun }= req.query;

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
    
        if (tahun) {
            whereConditions.push({ periode: parseInt(tahun) });
        }
      
        whereConditions.push({
            employee_id: {
                [Op.notIn]: [1] // Less than or equal to enddate
            }
        });
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

        const att = await VLeave.findAll({
            where: whereConditions,
            order: [['name', 'ASC']] 
        });
        console.log(whereConditions);
        
        console.log(att.length);
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

      // Membuat workbook dan worksheet baru
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Summary_Leave');

      // Menambahkan header kolom
      worksheet.columns = [
        { header: 'NIP', key: 'nip', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'Position', key: 'position', width: 32 },
        { header: 'Periode', key: 'periode', width: 20 },        
        
        { header: 'Sick', key: 'sick', width: 20 },
        { header: 'Permit', key: 'permit', width: 20 },

        { header: 'Total Leave', key: 'totalleave', width: 20 },
        { header: 'Leave Taken', key: 'takenleave', width: 20 },
        { header: 'Public Leave', key: 'publicleave', width: 20 },
        { header: 'Available Leave', key: 'availableleave', width: 20 }
      ];

      console.log("length:");
      console.log(att.length);
      // Menambahkan data ke worksheet
      worksheet.addRows(att);

      // Mengatur header respons untuk download file Excel
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=summaryleave_data.xlsx');

      // Menulis workbook ke respons
      // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      const filePath = './summaryleave_data.xlsx';  
      

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
            const subject = 'Sinar HR - Data Export';  
            const text = 'Period '+ tahun + '. Please find the attached data.';  
            const emailResponse = await sendEmailWithAttachment(recipientEmail, subject, text, filePath);  
            console.log("done send email");
            res.status(200).json({ 
              message: 'sent to email: '+recipientEmail, 
              datasource: att   
            });
      } else {
        console.log("download data");
        await workbook.xlsx.writeFile('./../../../homes/ardiansyah/Aplikasi_HR/Leave/summaryleave_data.xlsx'); 
        await workbook.xlsx.write(res);
        res.end();
      };      
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saat mengambil data dari database atau menulis file Excel');
    }
  });

  // Get a single t_cuti record by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
      const tcuti = await TCuti.findByPk(req.params.id);
      if (tcuti) {
        res.json(tcuti);
      } else {
        res.status(404).json({ error: 'Record x not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
