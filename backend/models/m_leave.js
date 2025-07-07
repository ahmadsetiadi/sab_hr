const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js'); // Koneksi ke database Anda

const MLeave = sequelize.define('m_leave', {
  leave_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  nip: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  periode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  startdate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  enddate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  totalleave: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'm_leave', // Nama tabel di database
  timestamps: false, // Jika tidak menggunakan kolom createdAt dan updatedAt
});

module.exports = MLeave;
