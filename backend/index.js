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

// Routes
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');
const leaveRoutes = require('./routes/tcuti');
const fingerRoutes = require('./routes/tfinger');
const attRoutes = require('./routes/tattendance');
const slipRoutes = require('./routes/tpayrollslip');
const zpRoutes = require('./routes/zprocess');

app.use('/user', userRoutes);
app.use('/employee', employeeRoutes);
app.use('/leave', leaveRoutes);
app.use('/finger', fingerRoutes);
app.use('/attendance', attRoutes);
app.use('/document/payrollslip', slipRoutes);
app.use('/process', zpRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Endpoint untuk mengirimkan file PDF
// app.get('/document/payrollslip', (req, res) => {
//   const filePath = path.join(__dirname, 'pdf/payrollslip', 'test.pdf'); // Ganti dengan path ke file PDF Anda
//   // console.log('File path:', filePath);
//   res.sendFile(filePath, (err) => {
//       if (err) {
//           res.status(err.status).end();
//       } else {
//           // res.status(200).json({ message: 'PDF sent successfully' });          
//       }
//   });
// });

// Endpoint GET
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

const { authenticateToken } = require('./utils/jwt');
app.post('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});


var httpServer = http.createServer(app);
// var httpsServer = https.createServer(options, app);


const WebSocket = require('ws');
const wss = new WebSocket.Server({ server: httpServer });

app.post('/process-payroll', (req, res) => {
    let { startdate, condition1, enddate } = req.body;
    console.log(startdate);
    console.log(enddate);
    console.log(condition1);

    // Simulasi proses payroll
    const totalSteps = 10;
    let currentStep = 0;
  
    // Kirim respons ke frontend bahwa proses dimulai
    res.status(202).json({ message: 'Proses payroll dimulai' });
  
    // Simulasi proses payroll dengan interval
    const interval = setInterval(() => {
        currentStep++;
        const progress = (currentStep / totalSteps) * 100;
  
        // Kirim pembaruan progres ke frontend melalui WebSocket
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ progress }));
            }
        });
  
        // Jika proses selesai, hapus interval
        if (currentStep >= totalSteps) {
            clearInterval(interval);
        }
    }, 1000); // Simulasi setiap detik
});

// app.post('/process-payroll', (req, res) => {
//   // Simulasi proses payroll
//   const totalSteps = 10;
//   let currentStep = 0;

//   // Kirim respons ke frontend bahwa proses dimulai
//   res.status(202).json({ message: 'Proses payroll dimulai' });

//   // Simulasi proses payroll dengan interval
//   const interval = setInterval(() => {
//       currentStep++;
//       const progress = (currentStep / totalSteps) * 100;

//       // Kirim pembaruan progres ke frontend melalui WebSocket
//       wss.clients.forEach(client => {
//           if (client.readyState === WebSocket.OPEN) {
//               client.send(JSON.stringify({ progress }));
//           }
//       });

//       // Jika proses selesai, hapus interval
//       if (currentStep >= totalSteps) {
//           clearInterval(interval);
//       }
//   }, 1000); // Simulasi setiap detik
// });

httpServer.listen(config.porthttp, config.ipserver, () =>{
  const txt = 'HTTP Server '+config.database+' started at '+config.ipserver+' on port '+config.porthttp+'...';
  // logger.info(txt);
  console.log(txt);
});
// httpsServer.listen(config.portserver, config.ipserver, () =>{
//   const txt = 'HTTPS Server '+config.database+' started at '+config.ipserver+' on port '+config.portserver+'...';
//   logger.info(txt);
//   console.log(txt);
// });


const sharp = require('sharp');  
  
   const inputDir = path.join(__dirname, 'uploads4');  
   const outputDir = path.join(__dirname, 'uploads5');  
  
   // Fungsi untuk mengonversi gambar  
   const convertImages = async () => {  
       let inputFilePath;
       try {  
           // Membaca semua file dalam folder uploads  
           const files = fs.readdirSync(inputDir);  
  
           // Filter hanya file .jpeg  
           const jpegFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpeg');  
  
          //  inputFilePath = path.join(inputDir, "image_1736299824672.jpeg");  
          //      console.log(inputFilePath);
          //      const outputFilePath = path.join(outputDir, "image_1736299824672.jpeg");
  
          //      await sharp(inputFilePath) 
          //          .resize(400, 400) 
          //          .toFormat('webp')  
          //          .toFile(outputFilePath);  
  
          //      console.log(`Converted: ${"image_1736299824672.jpeg"}`);  

           for (const file of jpegFiles) {  
               inputFilePath = path.join(inputDir, file);                                
               const outputFilePath = path.join(outputDir, file); // Tetap menggunakan ekstensi .jpeg  
  
               // Mengonversi ke WebP dan menyimpan dengan ekstensi .jpeg  
               await sharp(inputFilePath) 
                   .resize(400, 400) 
                   .toFormat('webp')  
                   .toFile(outputFilePath);  
  
               console.log(`Converted: ${file}`);  
           }  
  
           console.log('All images have been converted successfully.');  
       } catch (error) {  
           console.error('Error during conversion: '+inputFilePath, error);  
       }  
   };  
  
   // Menjalankan fungsi konversi  
  //  convertImages();  