// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');
const Employee = require('./m_employee');

const t_ad = sequelize.define('t_ad', {
      ad_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Diasumsikan ad_id adalah primary key yang auto-increment
        allowNull: false
      },
      tdate: {
        type: DataTypes.DATEONLY, // DATEONLY untuk tanggal tanpa waktu
        allowNull: false
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      nip: {
        type: DataTypes.STRING, // VARCHAR direpresentasikan sebagai STRING di Sequelize
        allowNull: true
      },
      salary_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      amount: {
        type: DataTypes.DOUBLE, // DOUBLE untuk angka floating point presisi ganda
        allowNull: false,
        defaultValue: 0
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true // Diasumsikan description bisa nullable
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      position_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },      
      employeestatus_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      status_deleted: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      useradded: {
        type: DataTypes.STRING,
        allowNull: true
      },
      dateadded: {
        type: DataTypes.DATE, // DATETIME untuk tanggal dan waktu
        allowNull: true,
        defaultValue: DataTypes.NOW // Otomatis diatur ke timestamp saat ini ketika record dibuat
      },
      useredited: {
        type: DataTypes.STRING,
        allowNull: true // Diasumsikan useredited bisa nullable
      },
      dateedited: {
        type: DataTypes.DATE, // DATETIME untuk tanggal dan waktu
        allowNull: true // Diasumsikan dateedited bisa nullable
      }
  }, {
    tableName: 't_ad',
    timestamps: false
  });
  
t_ad.belongsTo(Employee, { as:'employee', foreignKey: 'employee_id', targetKey: 'employee_id', constraints: false });

module.exports = t_ad;