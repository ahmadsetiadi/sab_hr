const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const env = process.env.NODE_ENV || 'production'; //console.log(env);
const config = require('./config/config.json')[env]; //console.log(config);

// Konfigurasi CORS
const corsOptions = {
  origin: '*', // Ganti dengan URL frontend Anda
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Jika Anda menggunakan cookie atau otentikasi
  optionsSuccessStatus: 204 // Untuk beberapa browser yang lebih tua
};

 
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
app.use('/payroll', zpRoutes);

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


const { authenticateToken } = require('./utils/jwt');
const { initWebSocket } = require('./utils/websocket');

app.get('/api/data', (req, res) => {
    const data = { message: 'Hello, World Node JS!', status: 'success', data: { item1: 'Value 1', item2: 'Value 2', item3: 'Value 3' } };
    res.json(data);
});
app.post('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});


var httpServer = http.createServer(app);
initWebSocket(httpServer);
// var httpsServer = https.createServer(options, app);

// // =====================================================================================
// // pisah ini dalam satu file
// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ server: httpServer });
// const ZProcess = require('./models/z_process');

// app.post('/run-payroll', authenticateToken, async (req, res) => {
//     let { startdate, condition1, enddate } = req.body;    
//     let zp;
//     const totalSteps = 100;
//     let currentStep = 0;
//     let pid;

//     try {        
//         zp = await ZProcess.create(req.body);
//         pid = zp.process_id; console.log(pid);        
//         const interval = setInterval(async () => {
//             const zz = await ZProcess.findOne({ where: { process_id: pid } });
//             if (zz) {
//                 currentStep = zz.nomor;
//                 console.log(currentStep);      
//                 const progress = (currentStep / totalSteps) * 100;
//                 wss.clients.forEach(client => {
//                     if (client.readyState === WebSocket.OPEN) {
//                         client.send(JSON.stringify({ progress }));
//                     }
//                 });
//                 if (currentStep >= totalSteps) {
//                     clearInterval(interval);  
//                     console.log("run payroll finished");          
//                 }
//             } else {
//                 console.log(`Tidak ditemukan ZProcess dengan process_id: ${pid}`);
//             }
//         }, 1000); // Simulasi setiap detik        

//         res.status(201).json(zp);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
// // =====================================================================================

httpServer.listen(config.porthttp, config.ipserver, () =>{
  const txt = 'HTTP Server '+config.database+' started at '+config.ipserver+' on port '+config.porthttp+'...';  
  console.log(txt);  // logger.info(txt);
});
// httpsServer.listen(config.portserver, config.ipserver, () =>{
//   const txt = 'HTTPS Server '+config.database+' started at '+config.ipserver+' on port '+config.portserver+'...';
//   logger.info(txt);
//   console.log(txt);
// });


   // Menjalankan fungsi konversi  
   //  convertImages();  
   const sharp = require('sharp');    
   const inputDir = path.join(__dirname, 'uploads4');  
   const outputDir = path.join(__dirname, 'uploads5');    
   const convertImages = async () => {  
       let inputFilePath;
       try {    
           const files = fs.readdirSync(inputDir);             
           const jpegFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpeg');  

           for (const file of jpegFiles) {  
               inputFilePath = path.join(inputDir, file);                                
               const outputFilePath = path.join(outputDir, file);   
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
   