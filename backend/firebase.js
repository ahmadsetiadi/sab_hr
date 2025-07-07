const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json"); // download dari Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
