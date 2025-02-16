// models/tCuti.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary

const TPayrollSlip = sequelize.define('t_payrollslip', {
  slip_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0    
  },
  tdate: DataTypes.DATE,
  name: DataTypes.STRING,  
  
}, {
  tableName: 't_payrollslip',
  timestamps: false,  
});

module.exports = TPayrollSlip;
