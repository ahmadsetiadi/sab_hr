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
// const fs = require('fs');
const path = require('path');

// moment.tz.setDefault("Asia/Bangkok");

// const now = moment(); // Waktu saat ini dalam UTC+7
// console.log("Current time in UTC+7:", now.format('YYYY-MM-DD HH:mm:ss'));


process.env.TZ = "Asia/Bangkok"; 
// console.log(new Date().toString());

// const swaggerUi = require('swagger-ui-express');
// swaggerDocument = require('./swagger.json');

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


// var routes = require('./routes');
// routes(app);

const env = process.env.NODE_ENV || 'production'; //console.log(env);
const config = require('./config/config.json')[env]; //console.log(config);

// var optionswagger = { customSiteTitle: "API - Fleischhacker HR" };
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionswagger));

// const logger = require('./logger.js');
// app.use((req, res, next) => {
//   logger.info({
//     "IP": req.ip || req.connection.remoteAddress,
//     "Header": req.headers,
//     "URL": `${req.method} ${req.originalUrl}`,
//     "Body": req.body,
//     "Query": req.query
//   });  
//   next();
// });

app.get('/api/data', (req, res) => {
  // Contoh data yang akan dikembalikan
  const data = {
      message: 'Hello, World Node JS!',
      status: 'success',
      data: {
          item1: 'Value 1',
          item2: 'Value 2',
          item3: 'Value 3'
      }
  };
  res.json(data);
});

const { exec } = require('child_process');  
  
// Fungsi untuk menjalankan perintah shell  
const installNodemailer = () => {  
  exec('npm install nodemailer', (error, stdout, stderr) => {  
    if (error) {  
      console.error(`Error installing nodemailer: ${error.message}`);  
      return;  
    }  
    if (stderr) {  
      console.error(`stderr: ${stderr}`);  
      return;  
    }  
    console.log(`stdout: ${stdout}`);  
  });  
};  

const installExcelJS = () => {  
    console.log("a1");
  exec('npm install exceljs', (error, stdout, stderr) => {  
    if (error) {  
      console.error(`Error installing exceljs: ${error.message}`);  
      return;  
    }  
    if (stderr) {  
      console.error(`stderr: ${stderr}`);  
      return;  
    }  
    console.log(`stdout: ${stdout}`);  
  });  
};  
  
// Panggil fungsi untuk menginstal nodemailer  
installNodemailer(); 
installExcelJS(); 

var httpServer = http.createServer(app);

httpServer.listen(config.porthttp, config.ipserver, () =>{
  const txt = 'HTTP Server '+config.database+' started at '+config.ipserver+' on port '+config.porthttp+'...';  
  console.log(txt);
});

