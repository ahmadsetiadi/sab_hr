const express = require('express');
const bodyParser = require('body-parser');

const cors = require("cors"); // Konfigurasi CORS

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

const env = process.env.NODE_ENV || 'production'; //console.log(env);
const config = require('./../config/config.json')[env]; //console.log(config);

var http = require('http');

// HTTPS ====================================================================================
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
const vsumRoutes = require('./routes/vsummary');

app.use('/vattendance', vattRoutes);
app.use('/vsummary', vsumRoutes);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/version', (req, res) => {
    // console.log("test");
    res.status(200).json({ 
        version: '1.1.0', 
        downloadUrl: 'https://sinar-hr.synology.me:3002/apk/app-release.apk'   
    });    
});

// Endpoint to serve the APK file
app.get('/apk/app-release.apk', (req, res) => {    
  const apkPath = path.join(__dirname, 'public', 'apk', 'app-release.apk');
  res.download(apkPath, 'app-release.apk', (err) => {
    if (err) {
      console.error('Error downloading APK:', err);
      res.status(500).send('Error downloading APK');
    }
  });
});

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(options, app);

httpServer.listen(config.porthttp2, "10.147.17.168", () =>{
  const txt = 'HTTP Server '+config.database+' started at 10.147.17.168 on port '+config.porthttp2+'...';  
  console.log(txt);
});
// httpsServer.listen(config.portserver, config.ipserver, () =>{
//   const txt = 'HTTPS Server '+config.database+' started at '+config.ipserver+' on port '+config.portserver+'...';
//   logger.info(txt);
//   console.log(txt);
// });


