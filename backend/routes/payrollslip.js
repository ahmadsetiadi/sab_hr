const express = require('express');
const router = express.Router();
const moment = require('moment'); // Jika diperlukan untuk formatting tanggal
const Employee = require('../models/m_employee');
const Bank = require('../models/m_bank');
const Company = require('../models/m_company');
const Department = require('../models/m_department'); 
const Employeestatus = require('../models/m_employeestatus');
const Jamsostek = require('../models/m_jamsostek');
const Position = require('../models/m_position');
const Resigntype = require('../models/m_resigntype');
const { authenticateToken  } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');
const { Op } = require('sequelize');
const SUser = require('./../models/s_user');
const connection = require('./../config/db'); 
const SUsergroup = require('../models/s_usergroup');
const v_summary = require('../models/v_summary');
const t_thr = require('../models/t_thr');
const util = require('util');

const { getEmployeeIds } = require('./global'); 

// GET /employee - Mendapatkan semua data employee
router.get('/', authenticateToken, async (req, res) => {
  try {
    const query = util.promisify(connection.query).bind(connection);
    
    let sql = `TRUNCATE TABLE s_date`;
    await query(sql);

    const { search, username, startdate, enddate }= req.query;
    
    // Convert the string to a Date object
    const edate = new Date(enddate);
    // Extract the month (0-based index, so January is 0, February is 1, etc.)
    const month = edate.getMonth() + 1;
    sql = `insert into s_date select * from s_date_detail where date_id=`+month;
    console.log(sql);
    await query(sql);
    
    console.log("dddddddd");
    // const employees = await Employee.findAll({});
    let data;
    let whereConditions = [];
    whereConditions.push({
      employee_id: {
          [Op.notIn]: [1] // Assuming you are searching by name
      }
    });
    console.log("e");
    if (search & search !="") {
      whereConditions.push({
        name: {
          [Op.like]: `%${search}%` // Assuming you are searching by name
        },
      });
    }
    console.log("f");
    const employeeIds = await getEmployeeIds(username); //console.log(employeeIds)
    console.log("g");
    if (employeeIds && employeeIds.length > 0) {        
      whereConditions.push({
          employee_id: {
              [Op.in]: employeeIds // Assuming you are searching by name
          }
      });
    }
    console.log("h");
    if (startdate && enddate) {
      whereConditions.push({
          enddate: {
              [Op.gte]: new Date(startdate) // Greater than or equal to startdate
          }
      });
      whereConditions.push({
        enddate: {
              [Op.lte]: new Date(enddate) // Less than or equal to enddate
          }
      });
   }
   console.log("i");
    data = await v_summary.findAll({
      where: whereConditions,       
      order: [
        ['tdate', 'ASC'] ,
        ['name', 'ASC'] 
      ]
    });
    console.log("gaji");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
  }
});

router.get('/thr', authenticateToken, async (req, res) => {
  try {
    const query = util.promisify(connection.query).bind(connection);
    
    let sql = `TRUNCATE TABLE s_date`;
    await query(sql);

    const { search, username, startdate, enddate }= req.query;
    
    // Convert the string to a Date object
    const edate = new Date(enddate);
    // Extract the month (0-based index, so January is 0, February is 1, etc.)
    const month = edate.getMonth() + 1;
    sql = `insert into s_date select * from s_date_detail where date_id=`+month;
    console.log(sql);
    await query(sql);
    
    console.log("dddddddd");
    // const employees = await Employee.findAll({});
    let data;
    let whereConditions = [];
    whereConditions.push({
      employee_id: {
          [Op.notIn]: [1] // Assuming you are searching by name
      }
    });
    if (search & search !="") {
      whereConditions.push({
        name: {
          [Op.like]: `%${search}%` // Assuming you are searching by name
        },
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

    data = await t_thr.findAll({
      where: whereConditions,       
      order: [
        ['tdate', 'ASC'] ,
        ['name', 'ASC'] 
      ]
    });
    console.log("thr");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
  }
});

module.exports = router;
