// models/tCuti.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary
const moment = require('moment');
const { Op } = require('sequelize');
const Employee = require('./m_employee');

const beforesaveTOtp = async (otp) => {    
    otp.expireddate = moment(otp.expireddate).add(7, 'hours');
};

const TOtp = sequelize.define('t_otp', {
  otp_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''   
  },
  expireddate: DataTypes.DATE,
  otp: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''   
  },
  useradded: DataTypes.STRING,
  dateadded: DataTypes.DATE,
  useredited: DataTypes.STRING,
  dateedited: DataTypes.DATE,
  
}, {
  tableName: 't_otp',
  timestamps: false,
  defaultScope: {
    include: [      
      { model: Employee, as: 'employee', },        
    ],
  },
  hooks: {
    beforeSave: async (otp, options) => {
      await beforesaveTOtp(otp);
    },
  },
});

// Define associations
TOtp.belongsTo(Employee, { as:'employee', foreignKey: 'employee_id', targetKey: 'employee_id', constraints: false });
module.exports = TOtp;
