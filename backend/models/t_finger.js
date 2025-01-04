// models/tCuti.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary
const moment = require('moment');
const { Op } = require('sequelize');
const Employee = require('./m_employee');

const beforesaveTFinger = async (finger) => {  
  // console.log(finger.fulldate);
  
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx");
  // console.log(moment(finger.fulldate).add(7, 'hours'));
  finger.fulldate = moment(finger.fulldate).add(7, 'hours');

  const dateOnly = finger.fulldate.toISOString().split('T')[0];
  // console.log(dateOnly);
  // finger.tdate = dateOnly;  //console.log("Date Only:", dateOnly); // Output: 2024-12-28

  // Mengambil hanya jam
  const timeOnly = finger.fulldate.toTimeString().split(' ')[0]; // Mengambil HH:mm:ss
  // console.log(finger.fulldate.toTimeString());
  // finger.ttime = moment(finger.fulldate).format('HH:mm:ss');  //console.log("Time Only:", timeOnly); // Output: 11:49:00

  console.log(finger);
  if (finger.username) {
      const employee = await Employee.findOne({
          where: {
              username: finger.username // Mencari berdasarkan kolom username
          }
      });
      if (employee) {
        finger.nip = employee.nip;
        finger.name = employee.name;
        finger.employee_id = employee.employee_id;
      } else {
        // console.log("a2");
      }
  }
};

const TFinger = sequelize.define('t_finger', {
  finger_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0    
  },
  nip: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''   
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''   
  },
  fulldate: DataTypes.DATE,
  tdate: {
    type: DataTypes.DATE,
    allowNull: true      
  },
  ttime: {
    type: DataTypes.DATE,
    allowNull: true      
  },
  inoutmode: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0    
  },
  latitude: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    defaultValue: 0    
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    defaultValue: 0    
  },
  fulladdress: DataTypes.STRING,
  filename: DataTypes.STRING,
  useradded: DataTypes.STRING,
  dateadded: DataTypes.DATE,
  useredited: DataTypes.STRING,
  dateedited: DataTypes.DATE,
}, {
  tableName: 't_finger',
  timestamps: false,
  defaultScope: {
    include: [      
      { model: Employee, as: 'employee', },        
    ],
  },
  hooks: {
    beforeSave: async (finger, options) => {
      await beforesaveTFinger(finger);
    },
  },
});

// Define associations
TFinger.belongsTo(Employee, { as:'employee', foreignKey: 'employee_id', targetKey: 'employee_id', constraints: false });
module.exports = TFinger;
