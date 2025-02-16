// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');

const v_attendance = sequelize.define('v_attendance', {
    attendance_id: {
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
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING
    },
    timein: {
        type: DataTypes.STRING
    },
    timeout: {
        type: DataTypes.STRING
    },
    workhour: {
        type: DataTypes.DOUBLE
    },
    lateminutes: {
        type: DataTypes.DOUBLE
    },
    earlyoutminutes: {
        type: DataTypes.DOUBLE
    },
    getmakan: {
        type: DataTypes.INTEGER
    },
    overtimehour: {
        type: DataTypes.DOUBLE
    },
    overtimeamount: {
        type: DataTypes.DOUBLE
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
    tableName: 'v_attendance',
    timestamps: false
  });
  
module.exports = v_attendance;