const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js'); // Koneksi ke database Anda

const Position = sequelize.define('m_position', {
  position_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  useradded: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  dateadded: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  useredited: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  dateedited: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'm_position', // Nama tabel di database
  timestamps: false, // Jika tidak menggunakan kolom createdAt dan updatedAt
});

module.exports = Position;
