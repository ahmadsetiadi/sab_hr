const express = require('express');
const router = express.Router();
const TOtp = require('./../models/t_otp');
const SUser = require('./../models/s_user');
const Employee = require('./../models/m_employee');
const { generateToken } = require('../utils/jwt');
const moment = require('moment'); // Import moment.js
const SUsergroup = require('../models/s_usergroup');
const crypto = require('crypto');
const { authenticateToken  } = require('../utils/jwt');
const { Op } = require('sequelize');

const varEmail = "hrdsinarantarbintang@gmail.com";
const varPassword = "Sinarantarbintang04";
const varEm = "ahmad.setiadi76@gmail.com";
const varSec = "nbvx unsb zkni mqla";
// Configure nodemailer transporter  
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({  
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: varEm,
    pass: varSec,
  },
});  

function generateOTP() {  
  return Math.floor(100000 + Math.random() * 900000).toString();  
}  

// POST /user/login
function generateMD5Hash(text) {
    // Buat hash MD5 dari teks yang diberikan
    return crypto.createHash('md5').update(text).digest('hex');
}

router.post('/login', async (req, res) => {
    let { username, password } = req.body;
    password = generateMD5Hash(password)
    // console.log("a1");
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    // console.log("a2");
    try {
        // Find user by username        
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
        // console.log("a3");
        if (!user) {
          return res.status(401).json({ message: 'Invalid username or password.' });
        }
        // console.log(user.usergroup);
        // console.log(user.usergroup.active);
        if (user.usergroup.active===0) {
            // console.log('aa');
            return res.status(401).json({ message: 'Invalid username or usergroup.' });
        } else {
            // console.log('bb');
        }
        // if(!user.usergroup) {
           
        // }
        // console.log("a4");
        if (password!=user.password) {
          return res.status(401).json({ message: 'Invalid username or password.' });
        }
        // console.log("a5");
        // Generate JWT token using the generateToken function
        const token = generateToken(user);
        const expired = moment().add(8, 'days').format('YYYY-MM-DD HH:mm:ss');
        // const expired = moment().add(1, 'minute').format('YYYY-MM-DD HH:mm:ss');

        const employee = await Employee.findOne({ where: {username: username}});
        
        // include: [
        //   {
        //       model: SUsergroup,
        //       as: 'usergroup'
        //   }
        // ]
        // const employee = await Employee.findByPk(req.params.id, {});

        // console.log("a6");
        // console.log(token);
        // Respond with success and token
        res.status(200).json({ 
            "token": token, 
            "user": user, 
            "employee": employee,
            "expired": expired, 
            "username": username,
            "user_id": user.id_user,
            "employee_id": employee.employee_id,
            "superuser": user.usergroup.superuser
        });
      } catch (err) {
        // console.log("a7")
        console.log(err.message);
        res.status(400).json({ message: err.message });
      }
});

router.put('/resetpassword/:id', async (req, res) => {  
  try {
    console.log('1');
    const user = await SUser.findByPk(req.params.id);
    console.log('2');
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }
    console.log("a");
    if (req.body.password!="") {      
      console.log("b");
      req.body.password = generateMD5Hash(req.body.password);      
      console.log("c");
      const employee = await Employee.findOne({ where: {username: user.username}});
      if (employee) {
        console.log("d");
        await employee.update({password: req.body.password});    
        console.log("e");
      }
    }
    console.log("f");
    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {  
  try {
    console.log('1x');
    const user = await SUser.findByPk(req.params.id);
    console.log('2x');
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }
    console.log("ax");
    if (req.body.password!="") {      
      console.log("bx");
      req.body.password = generateMD5Hash(req.body.password);      
      console.log("cx");
      const employee = await Employee.findOne({ where: {username: user.username}});
      if (employee) {
        console.log("dx");
        await employee.update({password: req.body.password});    
        console.log("ex");
      }
    }
    console.log("fx");
    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/otp/:username', async (req, res) => {  
  const { username } = req.params;  
  
  try {  
    // Find the user and employee by username  
    const user = await SUser.findOne({ where: { username } });  
    if (!user) {  
      return res.status(404).json({ message: 'User not found' });  
    }  
  
    const employee = await Employee.findOne({ where: { username } });  
    if (!employee) {  
      return res.status(404).json({ message: 'Employee not found' });  
    }  
    if (!employee.email) {  
      return res.status(404).json({ message: 'email not fill' });  
    }  
    if (employee.email=="") {  
      return res.status(404).json({ message: 'email is empty' });  
    }  
  
    const dt = moment().add(7, 'hours').toDate();
    console.log(dt);
    // Check for existing OTP  
    const existingOtp = await TOtp.findOne({  
      where: {  
        employee_id: employee.employee_id,  
        expireddate: {  
          [Op.gt]: dt // Check if the OTP is still valid (not expired)  
        }  
      }  
    });  
  
    if (existingOtp) {  
      return res.status(400).json({ message: 'An OTP has already been sent and is still valid. Please wait until it expires after 2 minutes'});  
    }  

    // Generate OTP  
    const otp = generateOTP();  
    const expireddate = moment().add(2, 'minutes').toDate(); // OTP expires in 10 minutes  
  
    // Save OTP to database  
    await TOtp.create({  
      employee_id: employee.employee_id,  
      email: employee.email,  
      expireddate,  
      otp,  
      useradded: username,  
      dateadded: new Date()  
    });  
  
    // Send OTP to user's email  
    const mailOptions = {  
      from: "HRD - Sinar Antar Bintang",  
      to: employee.email,  
      subject: 'Sinar HR - OTP Code',  
      text: `Your OTP code fro SINAR HR is ${otp} . It will expire in 2 minutes.`  
    };  
    // // console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {  
      if (error) {  
        return res.status(500).json({ 
          message: 'Failed to send email', 
          error: error.message          
        });  
      }  
      res.status(200).json({ 
        message: 'OTP sent to email: '+employee.email, 
        user_id: user.id_user, 
        otp   
      }); // Remove otp from response in production  
    });  
    // res.status(200).json({ message: 'OTP sent to email: '+employee.email, user_id: user.id_user, otp }); // Remove otp from response in production    
  } catch (error) {  
    res.status(500).json({ message: error.message });  
  }  
}); 

// // POST /user - Create a new user
// router.post('/', async (req, res) => {
//     try {
//         const newUser = await SUser.create(req.body);
//         res.status(201).json(newUser);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // GET /user - Retrieve all users
// router.get('/', async (req, res) => {
//     try {
//         const users = await SUser.findAll();
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // GET /user/:id - Retrieve a specific user
// router.get('/:id', getUserById, (req, res) => {
//     res.json(res.user);
// });

// // DELETE /user/:id - Delete a user
// router.delete('/:id', getUserById, async (req, res) => {
//     try {
//         await res.user.destroy();
//         res.json({ message: 'Deleted User' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // PUT /user/:id - Update a user
// router.put('/:id', getUserById, async (req, res) => {
//     if (req.body.username != null) {
//         res.user.username = req.body.username;
//     }
//     if (req.body.password != null) {
//         res.user.password = req.body.password;
//     }
//     try {
//         await res.user.save();
//         res.json(res.user);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// async function getUserById(req, res, next) {
//     let user;
//     try {
//         user = await SUser.findByPk(req.params.id);
//         if (user == null) {
//             return res.status(404).json({ message: 'Cannot find user' });
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message });
//     }
//     res.user = user;
//     next();
// }

module.exports = router;
