// routes/tCuti.js
const express = require('express');
const router = express.Router();
const ZProcess = require('../models/z_process');
const moment = require('moment');

const { authenticateToken  } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');
const { Op } = require('sequelize');
// const connection = require('./../config/db'); 
const { getEmployeeIds } = require('./global'); 

// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ server: httpServer });

// Create a new t_cuti record
router.post('/process', authenticateToken, async (req, res) => {
    let { startdate, condition1, enddate } = req.body;
    console.log(startdate);
    console.log(enddate);
    console.log(condition1)
    
    // createValidation(), 
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    let zp;
    const totalSteps = 10;
    let currentStep = 0;

    try {
        //req.body.status = "ENTRY";
        zp = await ZProcess.create(req.body);
        console.log(zp.process_id);
        // res.status(201).json(zp);
        // res.status(201).json({});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    const interval = setInterval(() => {
        currentStep++;
        const progress = (currentStep / totalSteps) * 100;
  
        // Kirim pembaruan progres ke frontend melalui WebSocket
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ progress }));
            }
        });
  
        // Jika proses selesai, hapus interval
        if (currentStep >= totalSteps) {
            clearInterval(interval);
            res.status(201).json(zp);
        }
    }, 1000); // Simulasi setiap detik
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
