// models/tCuti.js
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary
// const Company = require('./m_company');
// const Department = require('./m_department');
// const Employeestatus = require('./m_employeestatus');
// const Position = require('./m_position');
// const Employee = require('./m_employee');

const { Op } = require('sequelize');

// const beforesaveTCuti = async (cuti) => {  
//   cuti.tdate = cuti.startdate;

//   if (cuti.employee_id) {
//     if (cuti.employee_id!=0) {
//       const employee = await Employee.findByPk(cuti.employee_id);
//       if (employee) {
//         // console.log("a1");
//         cuti.nip = employee.nip;
//         cuti.name = employee.name;
//         cuti.joindate = employee.joindate;
//         cuti.resigndate = employee.resigndate;
//         cuti.company_id = employee.company_id;
//         cuti.department_id = employee.department_id;
//         cuti.position_id = employee.position_id;
//         cuti.employeestatus_id = employee.employeestatus_id;    
//       } else {
//         // console.log("a2");
//       }
//     }
//   }

//   if (cuti.leavetype_id) {
//     const leavetype = await LeaveType.findByPk(cuti.leavetype_id);
//     if (leavetype) {
//       cuti.annualleave=leavetype.annualleave;
//     } else {
//       cuti.annualleave=0;
//     }
//   } else {
//     cuti.annualleave=0;
//   }

//   if (cuti.employee_id && cuti.tdate) {
//     // console.log("aaaaaaaaaaaaaaaa");
//     const employeeCuti = await MEmployeeCuti.findOne({
//         where: {
//             employee_id: cuti.employee_id,
//             startdate: {
//                 [Op.lte]: cuti.tdate // tdate should be greater than or equal to startdate
//             },
//             enddate: {
//                 [Op.gte]: cuti.tdate // tdate should be less than or equal to enddate
//             }
//         }
//     });
//     // console.log("bbbbbbbbbbbbbbbbbbbbbb");
//     if (employeeCuti) {
//         // console.log("ccccccccccccccccccc");
//         cuti.employee_cuti_id = employeeCuti.employee_cuti_id; // Assuming 'id' is the primary key of m_employee_cuti

//     }
// }
// };

const TAttendance = sequelize.define('t_attendance', {
  attendance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fingerid: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
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
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  tdate: DataTypes.STRING,
  statusattendance_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  statusattendance: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  timein: DataTypes.STRING,
  timeout: DataTypes.STRING,
  manual: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  shift_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  historytime: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  shiftin: DataTypes.STRING,
  shiftout: DataTypes.STRING,
  getmakan: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },

  workhour: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  overtimehour: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  overtimedescription: DataTypes.STRING,
  lateminutes: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  permitminutes: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  earlyoutminutes: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },

  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
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
  useradded: DataTypes.STRING,
  dateadded: DataTypes.DATE,
  useredited: DataTypes.STRING,
  dateedited: DataTypes.DATE,
}, {
  tableName: 't_attendance',
  timestamps: false,
  // defaultScope: {
    // include: [      
      // { model: Employee, as: 'employee', },
      // { model: Company, as: 'company', },
      // { model: Department, as: 'department', },
      // { model: Employeestatus, as: 'employeestatus', },      
      // { model: Position, as: 'position', },       
    // ],
  // },
  // hooks: {
  //   beforeSave: async (cuti, options) => {
  //     await beforesaveTCuti(cuti);
  //   },
  // },
});

// Define associations
// TAttendance.belongsTo(Employee, { as:'employee', foreignKey: 'employee_id', targetKey: 'employee_id', constraints: false });
// TAttendance.belongsTo(Company, { as:'company', foreignKey: 'company_id', targetKey: 'company_id', constraints: false });
// TAttendance.belongsTo(Department, { as:'department', foreignKey: 'department_id', targetKey: 'department_id', constraints: false });
// TAttendance.belongsTo(Employeestatus, { as:'employeestatus', foreignKey: 'employeestatus_id', targetKey: 'employeestatus_id', constraints: false });
// TAttendance.belongsTo(Position, { as:'position', foreignKey: 'position_id', targetKey: 'position_id', constraints: false });
// TAttendance.belongsTo(LeaveType, { as:'leavetype', foreignKey: 'leavetype_id', targetKey: 'leavetype_id', constraints: false });

module.exports = TAttendance;
