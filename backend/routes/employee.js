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

const { getEmployeeIds } = require('./global'); 

const VLeave = require('../models/v_leave');

// GET /employee - Mendapatkan semua data employee
router.get('/', authenticateToken, async (req, res) => {
  try {
    const search = req.query.search;

    // const employees = await Employee.findAll({});
    let employees;
    let whereConditions = [];
    whereConditions.push({
      employee_id: {
          [Op.notIn]: [1] // Assuming you are searching by name
      }
    });
    if (search) {
      whereConditions.push({
        name: {
          [Op.like]: `%${search}%` // Assuming you are searching by name
        },
      });
    }

    const employeeIds = await getEmployeeIds(req.query.username); //console.log(employeeIds)
    if (employeeIds && employeeIds.length > 0) {        
      whereConditions.push({
          employee_id: {
              [Op.in]: employeeIds // Assuming you are searching by name
          }
      });
    }

    whereConditions.push({
      status_active: 1,
    });

    employees = await Employee.findAll({
      where: whereConditions,      
      include: [{
        model: VLeave,
        as: 'vleave',
        where: { periode: 2025 },
        required: false
      }],
      order: [
        ['name', 'ASC'] // Urutkan berdasarkan TAd.tdate
      ]
    });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
  }
});

router.get('/username/:user', authenticateToken, async (req, res) => {
  try {
    const username = req.params.user;

    const user = await SUser.findOne({ where: { 
        username: username,
        active: 1
      },
      include: [
        {
            model: SUsergroup,
            as: 'usergroup'
        }
      ]
    });
    if (!user) {
        res.status(200).json({ "data": null });      
    }
    let list;
    list = user.listemployeeid;

    if (list==null || list==undefined || list=="") {
      list = user.employee_id.toString();      
    } 

    const employeeIds = list.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
    if (employeeIds.length === 0) {
      res.status(200).json({ "data": null });      
    }

    // Create the SQL query
    const query = `SELECT employee_id AS id, name FROM m_employee WHERE employee_id IN (?) order by name`;
    // Execute the query
    connection.query(query, [employeeIds], (error, results) => {
        if (error) {
          res.status(200).json({ "data": null });   
        }
        res.json(results);
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
  }
});

// GET /employee/:id - Mendapatkan data employee berdasarkan ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, {});

    if (!employee) {
      //return res.status(404).json({ message: 'Employee not found' });
    }


    const company = await Company.findAll({ order: [ ['name', 'ASC'] ] });
    const department = await Department.findAll({ order: [ ['name', 'ASC'] ] });
    const employeestatus = await Employeestatus.findAll({ order: [ ['name', 'ASC'] ] });
    const position = await Position.findAll({ order: [ ['name', 'ASC'] ] });
    const jamsostek = await Jamsostek.findAll({ order: [ ['name', 'ASC'] ] });
    const bank = await Bank.findAll({ order: [ ['name', 'ASC'] ] });

    res.status(200).json({employee, company, department, employeestatus, position, jamsostek, bank});
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employee', error: err.message });
  }
});

const createEmployeeValidation = () => [
  body('nip')    
    .notEmpty().withMessage('nip cannot be empty')
    .isString().withMessage('nip must be a string'),
  body('name')    
    .notEmpty().withMessage('Name cannot be empty')
    .isString().withMessage('Name must be a string'),    
  body('username')    
    .notEmpty().withMessage('username cannot be empty')
    .isString().withMessage('username must be a string'),
  body('password')
    .notEmpty().withMessage('password cannot be empty')
    .isString().withMessage('password must be a string'),  
  body('joindate')
    .notEmpty().withMessage('joindate cannot be empty')
    .isString().withMessage('joindate must be a string'),
  body('ptkp')    
    .notEmpty().withMessage('ptkp cannot be empty')
    .isString().withMessage('ptkp must be a string'),
  // body('taxtype')    
  //   .notEmpty().withMessage('taxtype cannot be empty')
  //   .isInt().withMessage('taxtype must be a integer'),
  
  body('email').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email address'),  
];

const updateEmployeeValidation = () => [
  // body('nip')
  //   .optional()
  //   .notEmpty().withMessage('nip cannot be empty')
  //   .isString().withMessage('nip must be a string'),
  // body('name')
  //   .optional()
  //   .notEmpty().withMessage('Name cannot be empty')
  //   .isString().withMessage('Name must be a string'),  
  // body('username')
  //   .optional()
  //   .notEmpty().withMessage('username cannot be empty')
  //   .isString().withMessage('username must be a string'),
  // body('password')
  //   .optional()
  //   .notEmpty().withMessage('password cannot be empty')
  //   .isString().withMessage('password must be a string'),  
  // body('joindate')
  //   .optional()
  //   .notEmpty().withMessage('joindate cannot be empty')
  //   .isString().withMessage('joindate must be a string'),
  // body('ptkp')
  //   .optional()
  //   .notEmpty().withMessage('ptkp cannot be empty')
  //   .isString().withMessage('ptkp must be a string'),
  // body('taxtype')
  //   .optional()
  //   .notEmpty().withMessage('taxtype cannot be empty')
  //   .isInt().withMessage('taxtype must be a integer'),  
  body('email').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email address'),  
];

const deleteEmployeeValidation = () => [
  body('resigndate')
    .optional()
    .notEmpty().withMessage('Resigndate cannot be empty')
    .isString().withMessage('Resigndate must be a string'),  
  body('resign_reason')
    .optional()
    .notEmpty().withMessage('resignreason cannot be empty')
    .isString().withMessage('resignreason must be a string'),
  body('resigntype_id')
    .optional()
    .notEmpty().withMessage('Resigntype cannot be empty')
    .isInt().withMessage('Resigntype must be a integer'),
  body('status_active')
    .optional()
    .notEmpty().withMessage('status_active cannot be empty')
    .isInt().withMessage('status_active must be a integer')
];

// PUT /employee/:id - Memperbarui data employee berdasarkan ID
router.put('/:id', authenticateToken, updateEmployeeValidation(), async (req, res) => {
   // Cek hasil validasi
   console.log("===========================================================");
   console.log("update");
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

  try {
    const employee = await Employee.findByPk(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    await employee.update(req.body);
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update employee', error: err.message });
  }
});

// POST /employee - Membuat data employee baru
router.post('/', authenticateToken, createEmployeeValidation(), async (req, res) => {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   console.log("cccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
  try {
    const newEmployee = await Employee.create(req.body);

    const employees = await Employee.findAll({       
      order: [
        ['name', 'ASC'] // Urutkan berdasarkan TAd.tdate
      ]
    });
    const employeeIds = employees.map(employee => employee.employee_id).join(', ');

    let su = await SUser.findByPk(1487);
    if (su) { await su.update({listemployeeid: employeeIds}); }
    su = await SUser.findByPk(1356);
    if (su) { await su.update({listemployeeid: employeeIds}); }

    

    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create employee', error: err.message });
  }
});



// // DELETE /employee/:id - Menghapus data employee berdasarkan ID
router.delete('/:id', authenticateToken, deleteEmployeeValidation(), async (req, res) => {
  // Cek hasil validasi
  console.log("===========================================================");
  console.log("delete");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

 try {
   const employee = await Employee.findByPk(req.params.id);

   if (!employee) {
     return res.status(404).json({ message: 'Employee not found' });
   }

   await employee.update(req.body);
   res.status(200).json(employee);
 } catch (err) {
   res.status(400).json({ message: 'Failed to update employee', error: err.message });
 }
});

module.exports = router;
