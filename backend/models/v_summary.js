// models/attendance.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');

const v_summary = sequelize.define('v_summary', {
      payroll_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      no: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      transferdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      nip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employeestatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      position_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      employeestatus_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      joindate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      resigndate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      bankaccountnumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bankaccountname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bankname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gajipokok: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      uang_makan: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tk_jhtcompany: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tk_jkk: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tk_jkm: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      ks_company: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      p_tk_jhtcompany: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      p_tk_jhtemployee: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      p_tk_jkk: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      p_tk_jkm: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      p_ks_company: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      p_ks_employee: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      total_pendapatan: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      total_potongan: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      grandtotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rounding: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      takehomepay: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      startdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      enddate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      idtype: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ptkp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      npwpemployee: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  }, {
    tableName: 'v_summary',
    timestamps: false
  });
  
module.exports = v_summary;