// // server.js
// const express = require('express');
// const { Sequelize, DataTypes } = require('sequelize');
// const path = require('path');

// const app = express();
// const port = 3000;

// // Konfigurasi koneksi ke MySQL menggunakan Sequelize
// const sequelize = new Sequelize('sinar_hr', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Mengimpor model Attendance
// const Attendance = require(path.join(__dirname, 'models', 'attendance'))(sequelize);

// // Mengimpor route Attendance
// require(path.join(__dirname, 'routes', 'attendance'))(app, Attendance);

// // Menjalankan server
// app.listen(port, () => {
//   console.log(`Server berjalan di http://localhost:${port}`);
// });
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const express = require('express');
const bodyParser = require('body-parser');

const cors = require("cors");
// Konfigurasi CORS
const corsOptions = {
  origin: '*', // Ganti dengan URL frontend Anda
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Jika Anda menggunakan cookie atau otentikasi
  optionsSuccessStatus: 204 // Untuk beberapa browser yang lebih tua
};

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');


process.env.TZ = "Asia/Bangkok"; 

// HTTPS ====================================================================================
var http = require('http');
// var https = require('https');
// var fs = require('fs');
// var options = {
//      key: fs.readFileSync('./certificate/private.key'),
//      cert: fs.readFileSync('./certificate/certificate.crt'),
//      ca: fs.readFileSync('./certificate/ca_bundle.crt')
// }
// HTTPS ====================================================================================

app.use(cors(corsOptions));
app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const vattRoutes = require('./routes/vattendance');

app.use('/vattendance', vattRoutes);
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


var httpServer = http.createServer(app);
// var httpsServer = https.createServer(options, app);


httpServer.listen(3002, "192.168.1.23", () =>{
  const txt = 'HTTP Server sinar_hr started at 192.168.1.23 on port 3002...';
  console.log(txt);
});
// httpsServer.listen(config.portserver, config.ipserver, () =>{
//   const txt = 'HTTPS Server '+config.database+' started at '+config.ipserver+' on port '+config.portserver+'...';
//   logger.info(txt);
//   console.log(txt);
// });


