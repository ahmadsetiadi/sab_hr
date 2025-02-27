// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');
const Employee = require('./m_employee');

const t_loan = sequelize.define('t_loan', {
      loan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Diasumsikan ad_id adalah primary key yang auto-increment
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
      startdate: {
        type: DataTypes.DATEONLY, // DATEONLY untuk tanggal tanpa waktu
        allowNull: false
      },      
      total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      bulan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      amount: {
        type: DataTypes.DOUBLE, // DOUBLE untuk angka floating point presisi ganda
        allowNull: false,
        defaultValue: 0
      },
      sudahbayar: {
        type: DataTypes.DOUBLE, // DOUBLE untuk angka floating point presisi ganda
        allowNull: false,
        defaultValue: 0
      },
      sisa: {
        type: DataTypes.DOUBLE, // DOUBLE untuk angka floating point presisi ganda
        allowNull: false,
        defaultValue: 0
      },
      tipe: {
        type: DataTypes.STRING,
        allowNull: true // Diasumsikan description bisa nullable
      },
      keterangan: {
        type: DataTypes.STRING,
        allowNull: true // Diasumsikan description bisa nullable
      },
      status_deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      position_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      employeestatus_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    tableName: 't_loan',
    timestamps: false
  });

t_loan.belongsTo(Employee, { as:'employee', foreignKey: 'employee_id', targetKey: 'employee_id', constraints: false });
  
module.exports = t_loan;