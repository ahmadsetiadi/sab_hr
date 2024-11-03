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

// GET /employee - Mendapatkan semua data employee
router.get('/', authenticateToken, async (req, res) => {
  try {
    const employees = await Employee.findAll({});
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
  }
});

// GET /employee/:id - Mendapatkan data employee berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, {});

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employee', error: err.message });
  }
});

const createEmployeeValidation = () => [
  body('name')    
    .notEmpty().withMessage('Name cannot be empty')
    .isString().withMessage('Name must be a string'),  
  body('ptkp')    
    .notEmpty().withMessage('ptkp cannot be empty')
    .isString().withMessage('ptkp must be a string'),
  body('taxtype')    
    .notEmpty().withMessage('taxtype cannot be empty')
    .isInt().withMessage('taxtype must be a integer'),

  body('nip')    
    .notEmpty().withMessage('nip cannot be empty')
    .isString().withMessage('nip must be a string'),
  body('username')    
    .notEmpty().withMessage('username cannot be empty')
    .isString().withMessage('username must be a string'),
  body('password')
    .notEmpty().withMessage('password cannot be empty')
    .isString().withMessage('password must be a string'),  
  body('joindate')
    .notEmpty().withMessage('joindate cannot be empty')
    .isString().withMessage('joindate must be a string'),
  
  body('email').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email address'),  
];

const updateEmployeeValidation = () => [
  body('name')
    .optional()
    .notEmpty().withMessage('Name cannot be empty')
    .isString().withMessage('Name must be a string'),  
  body('ptkp')
    .optional()
    .notEmpty().withMessage('ptkp cannot be empty')
    .isString().withMessage('ptkp must be a string'),
  body('taxtype')
    .optional()
    .notEmpty().withMessage('taxtype cannot be empty')
    .isInt().withMessage('taxtype must be a integer'),

  body('nip')
    .optional()
    .notEmpty().withMessage('nip cannot be empty')
    .isString().withMessage('nip must be a string'),
  body('username')
    .optional()
    .notEmpty().withMessage('username cannot be empty')
    .isString().withMessage('username must be a string'),
  body('password')
    .optional()
    .notEmpty().withMessage('password cannot be empty')
    .isString().withMessage('password must be a string'),  
  body('joindate')
    .optional()
    .notEmpty().withMessage('joindate cannot be empty')
    .isString().withMessage('joindate must be a string'),
  
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
router.put('/:id', updateEmployeeValidation(), async (req, res) => {
   // Cek hasil validasi
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
router.post('/', createEmployeeValidation(), async (req, res) => {
  const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create employee', error: err.message });
  }
});



// // DELETE /employee/:id - Menghapus data employee berdasarkan ID
router.delete('/:id', deleteEmployeeValidation(), async (req, res) => {
  // Cek hasil validasi
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
