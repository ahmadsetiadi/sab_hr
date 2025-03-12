// models/tCuti.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary
// const Company = require('./m_company');
// const Department = require('./m_department');
// const Employeestatus = require('./m_employeestatus');
// const Position = require('./m_position');
// const Employee = require('./m_employee');

const { Op } = require('sequelize');

const TThr = sequelize.define('t_thr', {
  thr_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipe: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  joingaji: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  tdate: DataTypes.STRING,
  lebaran: DataTypes.STRING,
  cutoff: DataTypes.STRING,
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  nip: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },  
  joindate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  resigndate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  masakerja: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  basethr: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  
  taxallowance: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  pph21: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  takehomepay: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  npwpemployee: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  bankaccountnumber: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  bankaccountname: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },  
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  position_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  employeestatus_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  slipname: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  useradded: DataTypes.STRING,
  dateadded: DataTypes.DATE,
  useredited: DataTypes.STRING,
  dateedited: DataTypes.DATE,
}, {
  tableName: 't_thr',
  timestamps: false,
});

// Define associations
// TAttendance.belongsTo(Employee, { as:'employee', foreignKey: 'employee_id', targetKey: 'employee_id', constraints: false });
// TAttendance.belongsTo(Company, { as:'company', foreignKey: 'company_id', targetKey: 'company_id', constraints: false });
// TAttendance.belongsTo(Department, { as:'department', foreignKey: 'department_id', targetKey: 'department_id', constraints: false });
// TAttendance.belongsTo(Employeestatus, { as:'employeestatus', foreignKey: 'employeestatus_id', targetKey: 'employeestatus_id', constraints: false });
// TAttendance.belongsTo(Position, { as:'position', foreignKey: 'position_id', targetKey: 'position_id', constraints: false });
// TAttendance.belongsTo(LeaveType, { as:'leavetype', foreignKey: 'leavetype_id', targetKey: 'leavetype_id', constraints: false });

module.exports = TThr;
