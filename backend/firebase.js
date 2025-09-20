const admin = require("firebase-admin");
const SUser = require('./models/s_user');
const TNotif = require("./models/t_notif");
const Employee = require('./models/m_employee')
const serviceAccount = require("./firebase-key.json"); // download dari Firebase Console
const moment2 = require('moment-timezone');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function sendNotification(fromusername, username, title, body, data = {}) {
  
  // console.log("zzzzzzzzzzzzzzzzzzzzzzzzz");
  // console.log("username: "+ username);
  // console.log("title: "+ title);
  // console.log("body: "+ body);
  // console.log("=======================================");
  const user = await SUser.findOne({ where: { 
        username: username,
        active: 1
      }
  });  
  if (!user) {
      console.error('Gagal mengirim notifikasi: username not found');
      // throw error;
  }

  const deviceToken = user.fcm_token;
  if (deviceToken == "") {
      console.error('Gagal mengirim notifikasi: fcm token null');
      // throw error;
  }

  const message = {
    token: deviceToken,
    notification: {
      title: title,
      body: body,
    },
    data: data, // bisa kosong atau berisi key-value string
  };

  try {
    process.env.TZ = "Asia/Bangkok";    
    moment2.tz.setDefault("Asia/Bangkok");
    const now = moment2().tz("Asia/Bangkok");

    const response = await admin.messaging().send(message);
    console.log('Notifikasi berhasil dikirim:', response);

    const emp = await Employee.findOne({
        where: {
            username: username
        }
    });
    const ab = now.format("YYYY-MM-DD") + ' ' +now.format("HH:mm:ss");
    // console.log(ab);
    const notifData = {
        fromusername: fromusername,                        
        tdate: now.format("YYYY-MM-DD"),             // contoh: 2025-09-21
        ttime: now.format("HH:mm:ss"),               // contoh: 01:20:45
        tousername: username,
        employee_id: emp.employee_id,
        nip: emp.nip,
        title: title,
        body: body,                
    };
    const notif = await TNotif.create(notifData);
    
    return response;
  } catch (error) {
    console.error('Gagal mengirim notifikasi:', error);
    throw error;
  }
}

module.exports = {
  admin,
  sendNotification
};

