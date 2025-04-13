// routes/tCuti.js
const express = require('express');
const router = express.Router();
const TAd = require('../models/t_ad');
const MEmployee = require('../models/m_employee');
const moment = require('moment');

// validationResult

const { authenticateToken  } = require('../utils/jwt');
const { body } = require('express-validator');
const { Op } = require('sequelize');
// const connection = require('./../config/db'); 
const { getEmployeeIds } = require('./global'); 
const LeaveType = require('../models/m_leavetype');
const Employee = require('../models/m_employee');


// Create a new t_ad record
router.post('/', authenticateToken, async (req, res) => {
    try {
        const employee = await MEmployee.findOne({
            where: { employee_id: req.body.employee_id }
        });

        const tad = await TAd.create({
            tdate: req.body.tdate,
            employee_id: req.body.employee_id,
            nip: employee.nip,
            salary_id: req.body.salary_id,
            amount: req.body.amount,
            description: req.body.description,
            company_id: employee.company_id,
            department_id: employee.department_id,
            position_id: employee.position_id,
            employeestatus_id: employee.employeestatus_id,
            useradded: req.body.useradded, // Contoh penggunaan user dari req
            dateadded: new Date(),
          });

        res.status(201).json(tad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a t_ad record by ID
router.put('/approved/:id', authenticateToken, async (req, res) => {
    try {
        const tad = await TAd.findByPk(req.params.id);
        if (!tad) {
        return res.status(404).json({ message: 'Record not found' });
        }
        // await tad.update(req.body);
        await tad.update({   
            joingaji: req.body.joingaji,         
            status_deleted: req.body.status_deleted,
            useredited: req.body.useredited, // Contoh penggunaan user dari req
            dateedited: new Date(),            
        })
        res.status(200).json(tad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/reject/:id', authenticateToken, async (req, res) => {
    try {
        const tad = await TAd.findByPk(req.params.id);
        if (!tad) {
        return res.status(404).json({ message: 'Record not found' });
        }
        // await tad.update(req.body);
        await tad.update({            
            joingaji: req.body.joingaji,         
            status_deleted: req.body.status_deleted,
            useredited: req.body.useredited, // Contoh penggunaan user dari req
            dateedited: new Date(),            
        })
        res.status(200).json(tad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
    try {

        const employee = await MEmployee.findOne({
            where: { employee_id: req.body.employee_id }
        });
        
        const tad = await TAd.findByPk(req.params.id);
        if (!tad) {
        return res.status(404).json({ message: 'Record not found' });
        }
        // await tad.update(req.body);
        await tad.update({
            tdate: req.body.tdate,
            employee_id: req.body.employee_id,
            nip: employee.nip,
            salary_id: req.body.salary_id,
            amount: req.body.amount,
            description: req.body.description,
            company_id: employee.company_id,
            department_id: employee.department_id,
            position_id: employee.position_id,
            employeestatus_id: employee.employeestatus_id,
            useredited: req.body.useradded, // Contoh penggunaan user dari req
            dateedited: new Date(),            
        })
        res.status(200).json(tad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a t_ad record by ID
router.delete('/:id', authenticateToken, async (req, res) => {    
    try {
        const tad = await TAd.findByPk(req.params.id);

        if (!tad) {
            return res.status(404).json({ message: 'Record not found' });
        }

        await tad.update(req.body);
        res.status(200).json(tad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all t_cuti records
router.get('/', authenticateToken, async (req, res) => {
    try {
      const { search, username, startdate, enddate }= req.query;
      let whereConditions = [];
    //   whereConditions.push({
    //     status_deleted: 0
    //   });

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
                { '$employee.name$': { [Op.like]: `%${search}%` } },
                {
                    description: {
                        [Op.like]: `%${search}%` // Mencari berdasarkan description
                    }
                }
            ]
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
      
      const tads = await TAd.findAll({
          where: whereConditions, 
          include: [
            {
                model: Employee,
                as: 'employee'
            }
          ],
          order: [
            [{ model: Employee, as: 'employee' }, 'name', 'ASC'], // Urutkan berdasarkan Employee.name
            ['tdate', 'ASC'] // Urutkan berdasarkan TAd.tdate
          ]
      });

      res.json(tads);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Get a single t_cuti record by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        // const employee = await MEmployee.findOne({
        //     where: { employee_id: req.body.employee_id }
        // });

    //   const tad = await TAd.findByPk(req.params.id);
      
      const tad = await TAd.findOne({
        where: { ad_id: req.params.id },
        include: [
            {
                model: Employee,
                as: 'employee'
            }
        ]
      });

      if (tad) {
        res.json(tad);
      } else {
        res.status(404).json({ error: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
