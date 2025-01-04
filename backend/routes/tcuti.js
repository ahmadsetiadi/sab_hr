// routes/tCuti.js
const express = require('express');
const router = express.Router();
const TCuti = require('../models/t_cuti');
const moment = require('moment');

const { authenticateToken  } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');
const { Op } = require('sequelize');
const connection = require('./../config/db'); 
const { getEmployeeIds } = require('./global'); 
const LeaveType = require('../models/m_leavetype');


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

router.get('/leavetype', authenticateToken, async (req, res) => {
    try {
        const leavetype = await LeaveType.findAll();  
        res.json(leavetype);
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
          where: whereConditions
      });

      res.json(tcutis);

    } catch (error) {
      res.status(500).json({ error: error.message });
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
