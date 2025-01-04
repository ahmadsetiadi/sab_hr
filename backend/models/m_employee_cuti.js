// models/mEmployeeCuti.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary

const MEmployeeCuti = sequelize.define('m_employee_cuti', {
  employee_cuti_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  employee_id:  {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0    
  },
  nip: DataTypes.STRING,
  startdate: DataTypes.DATE,
  enddate: DataTypes.DATE,
  totalleave: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0    
  },
  useradded: DataTypes.STRING,
  dateadded: DataTypes.DATE,
  useredited: DataTypes.STRING,
  dateedited: DataTypes.DATE,
}, {
  tableName: 'm_employee_cuti',
  timestamps: false,
});

module.exports = MEmployeeCuti;
