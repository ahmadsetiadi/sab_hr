// routes/tFinger.js
const express = require('express');
const router = express.Router();
const TSlip = require('../models/t_payrollslip');
const moment = require('moment');
const moment2 = require('moment-timezone');

const { authenticateToken  } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');
const { Op, Sequelize } = require('sequelize');
const connection = require('./../config/db'); 
const { getEmployeeIds } = require('./global'); 

// const { Op } = require('sequelize');

// const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Endpoint untuk mengirimkan file PDF
// app.get('/document/payrollslip', (req, res) => {
//     const filePath = path.join(__dirname, 'pdf/payrollslip', 'test.pdf'); // Ganti dengan path ke file PDF Anda
//     // console.log('File path:', filePath);
//     res.sendFile(filePath, (err) => {
//         if (err) {
//             res.status(err.status).end();
//         } else {
//             // res.status(200).json({ message: 'PDF sent successfully' });          
//         }
//     });
//   });

// Get all t_cuti records
router.get('/:thn/:bln/:employeeid', async (req, res) => {
    try {
        // console.log("test");
        const thn = req.params.thn;
        const bln = req.params.bln;
        const eid = req.params.employeeid;

        let whereConditions = [];
        whereConditions.push({
            employee_id: eid // Assuming you are searching by name            
        });

        // console.log("a1");
        // whereConditions.push({
        //     [Op.and]: [
        //         Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('tdate')), thn),
        //         Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('tdate')), bln)
        //     ]
        // });

        // console.log("a2");
        const slip = await TSlip.findOne({
            where: whereConditions,
        });

        // console.log("a3");
        const bln2 = bln.padStart(2, '0'); 
        if (slip) {
            console.log("aa");
            const filePath = path.join(__dirname, `../pdf/payrollslip/${thn}${bln2}/`, slip.name);
            console.log(filePath);
            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ message: 'File not found' });
            }
            console.log("nn");
            res.sendFile(filePath, (err) => {
                if (err) {
                    res.status(err.status).end();
                } else {
                    // res.status(200).json({ message: 'PDF sent successfully' });          
                }
            });
        } else {
            console.log("bb");
            return res.status(404).json({ message: 'Data not found' });
        }
        

    } catch (error) {
        console.log(error);
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
