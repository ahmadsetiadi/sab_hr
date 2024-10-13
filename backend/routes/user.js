const express = require('express');
const router = express.Router();
const SUser = require('./../models/s_user');
const { generateToken } = require('../utils/jwt');
const moment = require('moment'); // Import moment.js
const SUsergroup = require('../models/s_usergroup');
const crypto = require('crypto');
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

        // console.log("a6");
        // console.log(token);
        // Respond with success and token
        res.status(200).json({ 
            "token": token, 
            "user": user, 
            "expired": expired, 
            "username": username,
            "superuser": user.usergroup.superuser
        });
      } catch (err) {
        // console.log("a7")
        console.log(err.message);
        res.status(400).json({ message: err.message });
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
