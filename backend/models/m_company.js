const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js'); // Koneksi ke database Anda

const Company = sequelize.define('m_company', {
  company_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  npwp: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  zip: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  telp: {
    type: DataTypes.STRING(16),
    allowNull: true,
  },
  fax: {
    type: DataTypes.STRING(16),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  jenisusaha: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  namapimpinan: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  npwp_pimpinan: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  kelurahan: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  kecamatan: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  klu: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  logo: {
    type: DataTypes.BLOB('long'),
    allowNull: true,
  },
  logo2: {
    type: DataTypes.BLOB('long'),
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
  tableName: 'm_company', // Nama tabel di database
  timestamps: false, // Jika tidak menggunakan kolom createdAt dan updatedAt
});

module.exports = Company;
