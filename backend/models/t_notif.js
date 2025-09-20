// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');
const Employee = require('./m_employee');
const moment2 = require('moment-timezone');
    process.env.TZ = "Asia/Bangkok";    
    moment2.tz.setDefault("Asia/Bangkok");

const t_notif = sequelize.define('t_notif', {
      notif_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Diasumsikan ad_id adalah primary key yang auto-increment
        allowNull: false
      },
      fromusername: {
        type: DataTypes.STRING, // VARCHAR direpresentasikan sebagai STRING di Sequelize
        allowNull: true
      },
      tdate: {
        type: DataTypes.DATEONLY, // DATEONLY untuk tanggal tanpa waktu
        allowNull: false
      },
      ttime: {
        type: DataTypes.TIME, // DATEONLY untuk tanggal tanpa waktu
        allowNull: false
      },
      tousername: {
        type: DataTypes.STRING, // VARCHAR direpresentasikan sebagai STRING di Sequelize
        allowNull: true
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
      title: {
        type: DataTypes.STRING,
        allowNull: true // Diasumsikan useredited bisa nullable
      },
      body: {
        type: DataTypes.STRING,
        allowNull: true // Diasumsikan useredited bisa nullable
      },  
      useradded: {
        type: DataTypes.STRING,
        allowNull: true
      },
      dateadded: {
        type: DataTypes.DATE, // DATETIME untuk tanggal dan waktu
        allowNull: true,
        defaultValue: moment2().tz("Asia/Bangkok")// Otomatis diatur ke timestamp saat ini ketika record dibuat
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
    tableName: 't_notif',
    timestamps: false
  });
  
t_notif.belongsTo(Employee, { as:'employee', foreignKey: 'employee_id', targetKey: 'employee_id', constraints: false });

module.exports = t_notif;