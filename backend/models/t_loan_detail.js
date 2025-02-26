// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');

const t_loan_detail = sequelize.define('t_loan_detail', {
      loan_detail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Diasumsikan ad_id adalah primary key yang auto-increment
        allowNull: false
      },
      loan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      tdate: {
        type: DataTypes.DATEONLY, // DATEONLY untuk tanggal tanpa waktu
        allowNull: false
      },  
      payrolldate: {
        type: DataTypes.DATEONLY, // DATEONLY untuk tanggal tanpa waktu
        allowNull: false
      },     
      amount: {
        type: DataTypes.DOUBLE, // DOUBLE untuk angka floating point presisi ganda
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
    tableName: 't_loan_detail',
    timestamps: false
  });
  
module.exports = t_loan_detail;