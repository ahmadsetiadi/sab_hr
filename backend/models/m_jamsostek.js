const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js'); // Koneksi ke database Anda

const Jamsostek = sequelize.define('m_jamsostek', {
  jamsostek_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(15),
    allowNull: true,
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
  tableName: 'm_jamsostek', // Nama tabel di database
  timestamps: false, // Jika tidak menggunakan kolom createdAt dan updatedAt
});

module.exports = Jamsostek;
