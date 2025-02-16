// employeeService.js
// const connection = require('./../config/db'); 
const SUser = require('./../models/s_user');
const SUsergroup = require('../models/s_usergroup');
const nodemailer = require('nodemailer');  

/**
 * Get employee IDs for a given username.
 * @param {string} username - The username of the user.
 * @returns {Promise<number[]>} - A promise that resolves to an array of employee IDs.
 */
async function getEmployeeIds(username) {
    const user = await SUser.findOne({
        where: {
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
        return null; // Return null if user is not found
    }

    let list = user.listemployeeid;

    if (list == null || list === undefined || list === "") {
        list = user.employee_id.toString();
    }

    const employeeIds = list.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
    return employeeIds; // Return the array of employee IDs
}

/**  
 * Mengirim email dengan lampiran  
 * @param {string} user - Email pengirim  
 * @param {string} pass - Password email pengirim  
 * @param {string} to - Email penerima  
 * @param {string} subject - Subjek email  
 * @param {string} text - Isi email  
 * @param {string} attachmentPath - Path file lampiran  
 * @returns {Promise} - Promise yang menyelesaikan pengiriman email  
 */  

const varEm = "hrdsinarantarbintang@gmail.com";
const varSec = "kmyq cwmm fzee dong";

const sendEmailWithAttachment = async (to, subject, text, attachmentPath) => {  
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
  
    const mailOptions = {  
        from: varEm,  
        to: to, // Email penerima  
        subject: subject,  
        text: text,  
        attachments: [  
            {  
                filename: attachmentPath.split('/').pop(), // Mengambil nama file dari path  
                path: attachmentPath  
            }  
        ]  
    };  
  
    return new Promise((resolve, reject) => {  
        transporter.sendMail(mailOptions, (error, info) => {  
            if (error) {  
                return reject('Error sending email: ' + error.message);  
            }  
            resolve('Email sent: ' + info.response);  
        });  
    });  
};  

module.exports = { getEmployeeIds, sendEmailWithAttachment };
