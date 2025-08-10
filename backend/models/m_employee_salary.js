const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js'); // Koneksi ke database Anda

const Employeesalary = sequelize.define('m_employee_salary', {
  employee_salary_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nip: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  tdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },  
  salary_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
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
  tableName: 'm_employee_salary', // Nama tabel di database
  timestamps: false, // Jika tidak menggunakan kolom createdAt dan updatedAt
});

module.exports = Employeesalary;
