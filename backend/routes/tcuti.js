// routes/tCuti.js
const express = require('express');
const ExcelJS = require('exceljs');
const router = express.Router();
const TCuti = require('../models/t_cuti');
const moment = require('moment');

const { authenticateToken  } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');
const { Op, literal  } = require('sequelize');
const connection = require('./../config/db'); 
const { getEmployeeIds } = require('./global'); 
const Employee = require('../models/m_employee');
const LeaveType = require('../models/m_leavetype');
const VLeave = require('../models/v_leave');
const MLeave = require('../models/m_leave');

// Create a new t_cuti record
router.post('/', authenticateToken, async (req, res) => {
    // createValidation(), 
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
        req.body.status = "ENTRY";
        const tcuti = await TCuti.create(req.body);
        res.status(201).json(tcuti);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a t_cuti record by ID
router.put('/:id', authenticateToken, async (req, res) => {
    // updateValidation(), 
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    
    try {
    // const [updated] = await TCuti.update(req.body, {
    //   where: { tcuti_id: req.params.id },
    // });
    // if (updated) {
    //   const updatedTCuti = await TCuti.findByPk(req.params.id);
    //   res.json(updatedTCuti);
    // } else {
    //   res.status(404).json({ error: 'Record not found' });
    // }

    const tcuti = await TCuti.findByPk(req.params.id);
    if (!tcuti) {
      return res.status(404).json({ message: 'Record not found' });
    }
    await tcuti.update(req.body);
    res.status(200).json(tcuti);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a t_cuti record by ID
router.delete('/:id', authenticateToken, async (req, res) => {
    // deleteValidation(), 
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
        // const deleted = await TCuti.destroy({
        // where: { tcuti_id: req.params.id },
        // });
        // if (deleted) {
        // res.status(204).send();
        // } else {
        // res.status(404).json({ error: 'Record not found' });
        // }
        const tcuti = await TCuti.findByPk(req.params.id);

        if (!tcuti) {
            return res.status(404).json({ message: 'Record not found' });
        }

        await tcuti.update(req.body);
        res.status(200).json(tcuti);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// const calculateTotalDays = (startDate, endDate, callback) => {
//     let totalDays = 0;
//     const currentDate = new Date(startDate);

//     while (currentDate <= new Date(endDate)) {
//         // console.log(currentDate);
//         const dayOfWeek = currentDate.getDay();
//         const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
//         console.log(formattedDate);
//         // Check if the day is not Saturday (6) or Sunday (0)
//         if (dayOfWeek !== 0 && dayOfWeek !== 6) {
//             // Check if the date is not in m_calendar
//             // connection.query('SELECT COUNT(*) AS count FROM m_calendar WHERE name = ?', [formattedDate], (error, results) => {
//             //     if (error) {
//             //         return callback(error);
//             //     }
//             //     if (results[0].count === 0) {
//             //         totalDays++;
//             //     }
//             //     // Move to the next day
//             //     currentDate.setDate(currentDate.getDate() + 1);
//             //     // If we reached the end date, return the total days
//             //     if (currentDate > new Date(endDate)) {
//             //         return callback(null, totalDays);
//             //     }
//             // });

//             const query = `SELECT COUNT(*) AS count FROM m_calendar WHERE name = ?`;
//             // Execute the query
//             connection.query(query, [formattedDate], (error, results) => {
//                 if (error) {
//                     res.status(200).json({ "data": null });   
//                 }
//                 console.log(results);
//                 console.log(results[0].count);
//                 if (results[0].count === 0) {
//                     console.log("a");
//                     totalDays++;
//                     console.log(totalDays);
//                 }                
//             });
            
//             // totalDays++;
            
//         } else {
//             // Move to the next day
            
//         }
//         currentDate.setDate(currentDate.getDate() + 1);
//     }

//     return callback(null, totalDays);
// };

const calculateTotalDays = async (startDate, endDate) => {
    let totalDays = 0;
    const currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
        const dayOfWeek = currentDate.getDay();
        const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        // console.log(formattedDate)
        // Check if the day is not Saturday (6) or Sunday (0)
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            // Check if the date is not in m_calendar
            const query = `SELECT COUNT(*) AS count FROM m_calendar WHERE name = ?`;
            const results = await new Promise((resolve, reject) => {
                connection.query(query, [formattedDate], (error, results) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(results);
                });
            });

            if (results[0].count === 0) {
                totalDays++;
                // console.log('a', totalDays);
            }
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return totalDays;
};

router.get('/totaldays', authenticateToken, async (req, res) => {
    try {
        const { startdate, enddate } = req.query;
        let totalDays;
        totalDays = 0;
        // Validate input
        if (!startdate || !enddate) {
            // return res.status(400).json({ error: 'startdate and enddate are required' });
            return res.json({ totalDays });
        }
        if (startdate > enddate) {
            // return res.status(400).json({ error: 'startdate must be less than enddate' });
            return res.json({ totalDays });
        }
    
        totalDays = await calculateTotalDays(startdate, enddate);
        res.json({ totalDays });

        // // Calculate total days
        // calculateTotalDays(startdate, enddate, (error, totalDays) => {
        //     if (error) {
        //         return res.status(500).json({ error: error.message });
        //     }
        //     res.json({ totalDays });
        // });

        // res.json({ total: 1 });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.get('/available', authenticateToken, async (req, res) => {
    try {
        const { employee_id, periode } = req.query;
        let availableleave;
        availableleave = 0;

        let whereConditions = [];
        whereConditions.push({ employee_id: employee_id });
        whereConditions.push({ periode: periode });

        const vleave = await VLeave.findOne({ where: whereConditions });
        if (vleave) {
            availableleave = vleave.availableleave;
            res.json({ availableleave });
        } else {
            availableleave = 0;
            res.json({ availableleave });
        }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.get('/leavetype', authenticateToken, async (req, res) => {
    try {
        const leavetype = await LeaveType.findAll();  
        res.json(leavetype);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Get leave summary per employee per tahun
router.get('/summary', authenticateToken, async (req, res) => {
    try {
        const { tahun, search, username } = req.query;

        if (!tahun) {
            return res.status(400).json({ error: 'Year is required' });
        }

        let whereConditions = [];
        whereConditions.push({ periode: parseInt(tahun) });

        if (search) {
            whereConditions.push({
                name: {
                    [Op.like]: `%${search}%`
                }
            });
        }

        const employeeIds = await getEmployeeIds(username); //console.log(employeeIds)
        if (employeeIds && employeeIds.length > 0) {        
            whereConditions.push({
                employee_id: {
                    [Op.in]: employeeIds // Assuming you are searching by name
                }
            });
        }

        const summary = await VLeave.findAll({
            where: whereConditions,
            order: [['name', 'ASC']]
        });

        res.json(summary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/export', async (req, res) => {
    try {
      console.log("starting export to excel");

      const { search, username, sendemail }= req.query;

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
        }
    
        // if (tahun) {
        //     whereConditions.push({ periode: parseInt(tahun) });
        // }
      
        whereConditions.push({
            employee_id: {
                [Op.notIn]: [1] // Less than or equal to enddate
            }
        });
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

        const att = await TCuti.findAll({
            where: whereConditions,
            order: [['name', 'ASC']] 
        });
        console.log(whereConditions);
        
        console.log(att.length);
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

      // Membuat workbook dan worksheet baru
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Leave');

      // Menambahkan header kolom
      worksheet.columns = [
        { header: 'NIP', key: 'nip', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'Type', key: 'tipeleave', width: 20 },
        { header: 'Startdate', key: 'startdate', width: 20 },        
        { header: 'Enddate', key: 'enddate', width: 20 },        

        { header: 'Total Days', key: 'takenleave', width: 20 },
        { header: 'Description', key: 'description', width: 20 },
      ];

      console.log("length:");
      console.log(att.length);
      // Menambahkan data ke worksheet
      const mappedData = att.map(item => ({
        nip: item.nip,
        name: item.name,
        startdate: item.startdate,
        enddate: item.enddate,
        takenleave: item.takenleave,
        tipeleave: 
            item.leavetype_id === 1 ? 'Annual Leave' :
            item.leavetype_id === 2 ? 'Permit' :
            item.leavetype_id === 3 ? 'Sick' :
            '',
        description: item.description,
        }));

        worksheet.addRows(mappedData);

      // Mengatur header respons untuk download file Excel
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=leave_data.xlsx');

      // Menulis workbook ke respons
      // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      const filePath = './leave_data.xlsx';  
      

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
            const text = 'Period '+ startdate + ' to '+ enddate + '. Please find the attached data.';  
            const emailResponse = await sendEmailWithAttachment(recipientEmail, subject, text, filePath);  
            console.log("done send email");
            res.status(200).json({ 
              message: 'sent to email: '+recipientEmail, 
              datasource: att   
            });
      } else {
        console.log("download data");
        await workbook.xlsx.writeFile('./../../../homes/ardiansyah/Aplikasi_HR/Leave/leave_data.xlsx'); 
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
        let whereConditions = [];
        whereConditions.push({
            tcuti_id: req.params.id
        });
        const tcuti = await TCuti.findOne({
                where: whereConditions,
                include: [{
                    model: VLeave,
                    as: 'vleave',
                    where: { periode: 2025 },
                    required: false
                }],
        });
        if (tcuti) {
            res.json(tcuti);
        } else {
            res.status(404).json({ error: 'Record x not found' });
        }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

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
          where: whereConditions,
          include: [{
            model: VLeave,
            as: 'vleave',
            where: { periode: 2025 },
            required: false
          }],
      });

      res.json(tcutis);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
