// models/tCuti.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary
const MEmployeeCuti = require('./m_employee_cuti');
const Company = require('./m_company');
const Department = require('./m_department');
const Employeestatus = require('./m_employeestatus');
const Position = require('./m_position');
const Employee = require('./m_employee');
const LeaveType = require("./m_leavetype");

const { Op } = require('sequelize');

const beforesaveTCuti = async (cuti) => {
  // console.log(cuti.employee_id);
  cuti.tdate = cuti.startdate;

  if (cuti.employee_id) {
    if (cuti.employee_id!=0) {
      const employee = await Employee.findByPk(cuti.employee_id);
      if (employee) {
        // console.log("a1");
        cuti.nip = employee.nip;
        cuti.name = employee.name;
        cuti.joindate = employee.joindate;
        cuti.resigndate = employee.resigndate;
        cuti.company_id = employee.company_id;
        cuti.department_id = employee.department_id;
        cuti.position_id = employee.position_id;
        cuti.employeestatus_id = employee.employeestatus_id;    
      } else {
        // console.log("a2");
      }
    }
  }

  if (cuti.leavetype_id) {
    const leavetype = await LeaveType.findByPk(cuti.leavetype_id);
    if (leavetype) {
      cuti.annualleave=leavetype.annualleave;
    } else {
      cuti.annualleave=0;
    }
  } else {
    cuti.annualleave=0;
  }

  if (cuti.employee_id && cuti.tdate) {
    // console.log("aaaaaaaaaaaaaaaa");
    const employeeCuti = await MEmployeeCuti.findOne({
        where: {
            employee_id: cuti.employee_id,
            startdate: {
                [Op.lte]: cuti.tdate // tdate should be greater than or equal to startdate
            },
            enddate: {
                [Op.gte]: cuti.tdate // tdate should be less than or equal to enddate
            }
        }
    });
    // console.log("bbbbbbbbbbbbbbbbbbbbbb");
    if (employeeCuti) {
        // console.log("ccccccccccccccccccc");
        cuti.employee_cuti_id = employeeCuti.employee_cuti_id; // Assuming 'id' is the primary key of m_employee_cuti

    }
}
};

const TCuti = sequelize.define('t_cuti', {
  tcuti_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  employee_cuti_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  status: DataTypes.STRING,
  tdate: DataTypes.DATE,
  startdate: DataTypes.DATE,
  enddate: DataTypes.DATE,
  takenleave: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0    
  },
  description: DataTypes.STRING,
  leavetype_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0    
  },
  annualleave: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0    
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0    
  },
  nip: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''   
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''   
  },
  joindate: DataTypes.DATE,
  resigndate: DataTypes.DATE,
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
  userentry: DataTypes.STRING,
  userapproved: DataTypes.STRING,
  usercancel: DataTypes.STRING,
  status_deleted: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  useradded: DataTypes.STRING,
  dateadded: DataTypes.DATE,
  useredited: DataTypes.STRING,
  dateedited: DataTypes.DATE,
}, {
  tableName: 't_cuti',
  timestamps: false,
  defaultScope: {
    include: [      
      { model: Company, as: 'company', },
      { model: Department, as: 'department', },
      { model: Employeestatus, as: 'employeestatus', },      
      { model: Position, as: 'position', },  
      { model: LeaveType, as: 'leavetype', },      
    ],
  },
  hooks: {
    beforeSave: async (cuti, options) => {
      await beforesaveTCuti(cuti);
    },
  },
});

// Define associations
TCuti.belongsTo(MEmployeeCuti, { as:'employeecuti', foreignKey: 'employee_cuti_id', targetKey: 'employee_cuti_id', constraints: false });
TCuti.belongsTo(Company, { as:'company', foreignKey: 'company_id', targetKey: 'company_id', constraints: false });
TCuti.belongsTo(Department, { as:'department', foreignKey: 'department_id', targetKey: 'department_id', constraints: false });
TCuti.belongsTo(Employeestatus, { as:'employeestatus', foreignKey: 'employeestatus_id', targetKey: 'employeestatus_id', constraints: false });
TCuti.belongsTo(Position, { as:'position', foreignKey: 'position_id', targetKey: 'position_id', constraints: false });
TCuti.belongsTo(LeaveType, { as:'leavetype', foreignKey: 'leavetype_id', targetKey: 'leavetype_id', constraints: false });

module.exports = TCuti;
