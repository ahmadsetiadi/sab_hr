// models/tCuti.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary
// const MEmployeeCuti = require('./m_employee_cuti');
// const Company = require('./m_company');
// const Department = require('./m_department');
// const Employeestatus = require('./m_employeestatus');
// const Position = require('./m_position');
// const Employee = require('./m_employee');
// const LeaveType = require("./m_leavetype");

const { Op } = require('sequelize');

const ZProcess = sequelize.define('z_process', {
  process_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tdate: DataTypes.DATE,
  ttime: DataTypes.TIME,
  name: DataTypes.STRING,

  param1: DataTypes.STRING,
  param2: DataTypes.STRING,
  param3: DataTypes.STRING,
  param4: DataTypes.STRING,
  param5: DataTypes.STRING,

  condition1: DataTypes.STRING,
  condition2: DataTypes.STRING,
  condition3: DataTypes.STRING,
  condition4: DataTypes.STRING,
  condition5: DataTypes.STRING,

  isprocess: DataTypes.INTEGER,
  total: DataTypes.INTEGER,
  nomor: DataTypes.INTEGER,

}, {
  tableName: 'z_process',
  timestamps: false,
  // defaultScope: {
  //   include: [      
  //     { model: Company, as: 'company', },
  //     { model: Department, as: 'department', },
  //     { model: Employeestatus, as: 'employeestatus', },      
  //     { model: Position, as: 'position', },  
  //     { model: LeaveType, as: 'leavetype', },      
  //   ],
  // },
  // hooks: {
  //   beforeSave: async (cuti, options) => {
  //     await beforesaveTCuti(cuti);
  //   },
  // },
});

// Define associations
// TCuti.belongsTo(MEmployeeCuti, { as:'employeecuti', foreignKey: 'employee_cuti_id', targetKey: 'employee_cuti_id', constraints: false });
// TCuti.belongsTo(Company, { as:'company', foreignKey: 'company_id', targetKey: 'company_id', constraints: false });
// TCuti.belongsTo(Department, { as:'department', foreignKey: 'department_id', targetKey: 'department_id', constraints: false });
// TCuti.belongsTo(Employeestatus, { as:'employeestatus', foreignKey: 'employeestatus_id', targetKey: 'employeestatus_id', constraints: false });
// TCuti.belongsTo(Position, { as:'position', foreignKey: 'position_id', targetKey: 'position_id', constraints: false });
// TCuti.belongsTo(LeaveType, { as:'leavetype', foreignKey: 'leavetype_id', targetKey: 'leavetype_id', constraints: false });

module.exports = ZProcess;
