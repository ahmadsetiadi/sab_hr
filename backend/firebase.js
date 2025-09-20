const admin = require("firebase-admin");
const SUser = require('./models/s_user');
const serviceAccount = require("./firebase-key.json"); // download dari Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function sendNotification(username, title, body, data = {}) {
  
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
    const response = await admin.messaging().send(message);
    console.log('Notifikasi berhasil dikirim:', response);
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

