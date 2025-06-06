// routes/tFinger.js
const express = require('express');
const router = express.Router();
const TFinger = require('../models/t_finger');
const moment = require('moment');
const moment2 = require('moment-timezone');

const { authenticateToken  } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');
const { Op } = require('sequelize');
const connection = require('./../config/db'); 
const { getEmployeeIds } = require('./global'); 

// const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// const LeaveType = require('../models/m_leavetype');

router.post('/upload-image', authenticateToken, [
    body('username').notEmpty().withMessage('Username is required'),
    body('fulldate').isISO8601().withMessage('Fulldate must be a valid date and time'),
    body('inoutmode').isInt().withMessage('Inoutmode must be an integer'),
    body('latitude').isFloat().withMessage('Latitude must be a float'),
    body('longitude').isFloat().withMessage('Longitude must be a float'),
], async (req, res) => {
    process.env.TZ = "Asia/Bangkok";
    // Validate request
    // console.log(req.body);
    // console.log("test");
    console.log("================================");
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    moment2.tz.setDefault("Asia/Bangkok");
    console.log("a");
    
    const { imagedata } = req.body; // Mengambil data gambar dari request body
    if (!imagedata) {
        return res.status(400).json({ error: 'No image data provided' });
    }
    console.log("b");
    const fileName = `image_${Date.now()}.jpeg`; // Nama file unik berdasarkan timestamp
    console.log("c");
    const fingerData = {
        username: req.body.username,        
        fulldate: req.body.fulldate,
        tdate: req.body.tdate,
        ttime: req.body.ttime,
        inoutmode: req.body.inoutmode,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        fulladdress: req.body.fulladdress,
        filename: "uploads/" + fileName
    };
    console.log("d")
    const base64Data = imagedata; // .value; //.replace(/^data:image\/jpeg;base64,/, '');
    // Menentukan nama file dan path untuk menyimpan gambar
    
    const filePath = path.join(__dirname, './../uploads', fileName); // Pastikan folder 'uploads' ada
    console.log("e");
    console.log("xcxcxcxcxcxcxc");
    console.log(filePath);    
    fs.writeFile(filePath, base64Data, 'base64', async (err) => {
        if (err) {
            console.error('Error saving image:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }

        try {
            // Create a new record in t_finger
            console.log("start save");
            const finger = await TFinger.create(fingerData);
            console.log("after save");
            res.status(201).json(finger);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }        
    });

    
});

// Create a new t_finger record
router.post('/', authenticateToken, [
    body('username').notEmpty().withMessage('Username is required'),
    body('fulldate').isISO8601().withMessage('Fulldate must be a valid date and time'),
    body('inoutmode').isInt().withMessage('Inoutmode must be an integer'),
    body('latitude').isFloat().withMessage('Latitude must be a float'),
    body('longitude').isFloat().withMessage('Longitude must be a float'),
], async (req, res) => {
    process.env.TZ = "Asia/Bangkok";
    // Validate request
    // console.log(req.body);
    // console.log("test");
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    moment2.tz.setDefault("Asia/Bangkok");
    
    const fingerData = {
        username: req.body.username,
        // fulldate: moment2.tz(req.body.fulldate, 'Asia/Bangkok').toDate(), // Simpan sebagai string
        fulldate: req.body.fulldate,
        tdate: req.body.tdate, // Simpan sebagai string
        ttime: req.body.ttime, // Simpan sebagai string
        inoutmode: req.body.inoutmode,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        fulladdress: req.body.fulladdress,
    };

    // console.log(fingerData.fulldate);
    // moment2.tz.setDefault("Asia/Bangkok");


    // console.log(fingerData);
    // console.log("==================================================");
    try {
        // Create a new record in t_finger
        const finger = await TFinger.create(fingerData);
        res.status(201).json(finger);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




// Get all t_cuti records
router.get('/', authenticateToken, async (req, res) => {
    try {
      const { inoutmode, search, username, startdate, enddate, fulldate, fingerid }= req.query;
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
            name: {
                [Op.like]: `%${search}%` // Assuming you are searching by name
            }
        });
      }
      const mode=inoutmode;
      if (inoutmode) {
        whereConditions.push({
            inoutmode: mode
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

      if (fingerid) {
        if (fingerid!='') {
            // Mengonversi string fingerid menjadi array dan mengonversi ke integer  
            const fingerIdArray = fingerid.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));  
  
            // Menambahkan kondisi where untuk finger_id not in fingerIdArray  
            whereConditions.push({  
                finger_id: {  
                    [Op.notIn]: fingerIdArray  
                }  
            });  
        }
      }
      
      const tfingers = await TFinger.findAll({
          where: whereConditions,
          order: [['fulldate', 'DESC']],
          limit: 5
      });

    //   res.json(tfingers);

    const tfingersWithBase64 = await Promise.all(tfingers.map(async (tfinger) => {  
        if (inoutmode!=77) {
            return {  
                ...tfinger.toJSON(),  
                base64Image: null // Atau Anda bisa mengatur ke string kosong jika file tidak ditemukan  
            }; 
        } else {
            const filePath = path.join(__dirname, '../', tfinger.filename); // Path ke file  
            try {  
                const fileData = fs.readFileSync(filePath); // Membaca file  
                const base64String = fileData.toString('base64'); // Mengonversi ke base64  
                return {  
                    ...tfinger.toJSON(), // Mengonversi Sequelize instance ke objek biasa  
                    base64Image: `data:image/jpeg;base64,${base64String}` // Menambahkan string base64 ke objek  
                };  
            } catch (error) {  
                console.error(`Error reading file ${filePath}:`, error);  
                return {  
                    ...tfinger.toJSON(),  
                    base64Image: null // Atau Anda bisa mengatur ke string kosong jika file tidak ditemukan  
                };  
            } 
        }
    }));  

    res.json(tfingersWithBase64); 

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
