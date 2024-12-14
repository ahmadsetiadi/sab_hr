const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

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

app.use(cors());
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
app.use('/user', userRoutes);
app.use('/employee', employeeRoutes);

const { authenticateToken } = require('./utils/jwt');
app.post('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(options, app);

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

