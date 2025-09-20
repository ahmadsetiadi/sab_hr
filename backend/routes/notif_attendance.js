
const SUser = require('./../models/s_user');
const Employee = require('./../models/m_employee');
const { sendNotification } = require('./../firebase.js');
const { Op } = require("sequelize");
const TFinger = require('./../models/t_finger'); 
const moment = require("moment");

const today = moment().format("YYYY-MM-DD");
//  sendNotification("adi", "Absensi", 'Jangan lupa absen hari ini', { screen: 'home' })
//             .then(() => console.log('Sukses'))
//             .catch((err) => console.error('Error kirim:', err));


    //88 checkin
    //99 checkout
    //77 checkpoint

async function notif_checkin(username, title, body, data = {}) {
    const emp = await Employee.findAll({
        where: {
            employee_id: {
                [Op.in]: [1] //[11, 13, 14]
            }
        }
    });

    for (const e of emp) {
        const finger = await TFinger.findAll({
            where: {
                employee_id: e.employee_id,
                tdate: today,
                inoutmode: 88 //checkin
            }
        });
        if (finger.length === 0) {  
            console.log("masuk - "+e.username);          
            sendNotification(e.username, "Absensi Masuk", 'Jangan lupa absen masuk hari ini', { screen: 'home' })
                        .then(() => console.log('Sukses'))
                        .catch((err) => console.error('Error kirim:', err));

        } 
    }
}

async function notif_checkpoint(username, title, body, data = {}) {
    const emp = await Employee.findAll({
        where: {
            employee_id: {
                [Op.in]: [1] //[11, 13, 14]
            }
        }
    });

    for (const e of emp) {
        const finger = await TFinger.findAll({
            where: {
                employee_id: e.employee_id,
                tdate: today,
                inoutmode: 77
            }
        });
        if (finger.length === 0) {  
            console.log("point - "+e.username);          
            sendNotification(e.username, "Check Point", 'Jangan lupa check point hari ini', { screen: 'home' })
                        .then(() => console.log('Sukses'))
                        .catch((err) => console.error('Error kirim:', err));

        } 
    }
}

async function notif_checkout(username, title, body, data = {}) {
    const emp = await Employee.findAll({
        where: {
            employee_id: {
                [Op.in]: [1] //[11, 13, 14]
            }
        }
    });

    for (const e of emp) {
        const finger = await TFinger.findAll({
            where: {
                employee_id: e.employee_id,
                tdate: today,
                inoutmode: 99
            }
        });
        if (finger.length === 0) {  
            console.log("pulang - "+e.username);          
            sendNotification(e.username, "Absensi Pulang", 'Jangan lupa absen pulang hari ini', { screen: 'home' })
                        .then(() => console.log('Sukses'))
                        .catch((err) => console.error('Error kirim:', err));

        } 
    }
}

module.exports = {  
  notif_checkin,
  notif_checkout,
  notif_checkpoint
};

