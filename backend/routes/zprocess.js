// routes/tCuti.js
const express = require('express');
const router = express.Router();
// const { Op } = require('sequelize');
// 
// const moment = require('moment');
// const { body, validationResult } = require('express-validator');
// 

const ZProcess = require('../models/z_process');
const { authenticateToken  } = require('../utils/jwt');
const { sendProgressUpdate  } = require('../utils/websocket');
// const { getEmployeeIds } = require('./global'); 

router.post('/process', authenticateToken, async (req, res) => {
      // console.log("process");
      // let { startdate, condition1, enddate } = req.body;    
      let zp;
      let totalSteps = 100;
      let currentStep = 0;
      let pid;

      try {        
          zp = await ZProcess.create(req.body);
          pid = zp.process_id; console.log(pid);        
          const interval = setInterval(async () => {
              const zz = await ZProcess.findOne({ where: { process_id: pid } });
              if (zz) {
                  currentStep = zz.nomor;
                  totalSteps  = zz.total;                   
                  const progress = (currentStep / totalSteps) * 100;                  
                  sendProgressUpdate(progress);
                  if (currentStep >= totalSteps) {
                      clearInterval(interval);  
                      console.log("run payroll finished");          
                  }
              } else {
                  console.log(`Tidak ditemukan ZProcess dengan process_id: ${pid}`);
              }
          }, 1000); // Simulasi setiap detik        

          res.status(201).json(zp);
      } catch (error) {
          res.status(400).json({ error: error.message });
      }
});


module.exports = router;
