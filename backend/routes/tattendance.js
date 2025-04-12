// routes/tFinger.js
const express = require('express');
const router = express.Router();
//const ExcelJS = require('exceljs'); 
const SUser = require('../models/s_user');
const Employee = require('../models/m_employee');
const TAttendance = require('../models/t_attendance');
const moment = require('moment');
const moment2 = require('moment-timezone');

const { authenticateToken  } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');
const { Op, DatabaseError } = require('sequelize');
const connection = require('./../config/db'); 
const { getEmployeeIds, sendEmailWithAttachment } = require('./global'); 

// const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Get all t_cuti records
router.get('/', authenticateToken, async (req, res) => {
    try {
      const { search, username, startdate, enddate, sendemail }= req.query;
      let whereConditions = [];
    //   whereConditions.push({
    //     status_deleted: 0
    //   });

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
              { username: { [Op.like]: `%${search}%` } } // Mencari berdasarkan username  
          ]  
        });
      }
    //   const mode=inoutmode;
    //   if (inoutmode) {
    //     whereConditions.push({
    //         inoutmode: mode
    //     });
    //   }

      // console.log(startdate);
      // console.log(enddate);
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

      const att = await TAttendance.findAll({
        where: whereConditions,
          order: [['name', 'ASC'], ['tdate', 'ASC']] 
      });

      // console.log(whereConditions);
      
      if (sendemail==0 || email=="") {
        res.json(att);
      } else {    
        res.json(att);    
            // res.status(200).send(emailResponse);  
      }

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const att = await TAttendance.findByPk(req.params.id);
    if (att) {
      res.json(att);
    } else {
      res.status(404).json({ error: 'Record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {  
  try {

  const att = await TAttendance.findByPk(req.params.id);
  if (!att) {
    return res.status(404).json({ message: 'Record not found' });
  }
  await att.update(req.body);
  res.status(200).json(att);
} catch (error) {
  res.status(400).json({ error: error.message });
}
});

module.exports = router;
