// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');

const v_ad = sequelize.define('v_ad', {
    ad_id: {
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
    amount: {
        type: DataTypes.DOUBLE
    },
    description: {
      type: DataTypes.STRING
    },
    joingaji: {
        type: DataTypes.INTEGER
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
    tableName: 'v_ad',
    timestamps: false
  });
  
module.exports = v_ad;