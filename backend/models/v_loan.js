// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');

const v_loan = sequelize.define('v_loan', {
    loan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nip: {
        type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    tdate: {
      type: DataTypes.DATEONLY
    },
    startdate: {
      type: DataTypes.DATEONLY
    },
    total: {
      type: DataTypes.DOUBLE
    },
    bulan: {
      type: DataTypes.INTEGER
  } ,
    amount: {
        type: DataTypes.DOUBLE
    },
    sudahbayar: {
      type: DataTypes.DOUBLE
    },
    sisa: {
      type: DataTypes.DOUBLE
    },
    keterangan: {
      type: DataTypes.STRING
    },

    company: {
        type: DataTypes.STRING
    },
    department: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    },
    employeestatus: {
        type: DataTypes.STRING
    },
    employee_id: {
        type: DataTypes.INTEGER
    },
  }, {
    tableName: 'v_loan',
    timestamps: false
  });
  
module.exports = v_loan;