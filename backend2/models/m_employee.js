const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');
// const Bank = require('./m_bank');
// const Company = require('./m_company');
// const Department = require('./m_department');
// const Employeestatus = require('./m_employeestatus');
// const Jamsostek = require('./m_jamsostek');
// const Position = require('./m_position');
// const Resigntype = require('./m_resigntype');
const moment = require('moment');

// const calculateWorkLength = (employee) => {
//   if (employee.joindate) {
//     const today = moment();
//     const joinDate = moment(employee.joindate);
//     const years = today.diff(joinDate, 'years', true);
//     employee.worklength = parseFloat(years.toFixed(2));
//     employee.taxirregular = employee.taxtype;
//     employee.taxfinal = employee.taxtype;
    
//     if (employee.dob) {
//       const dob = moment(employee.dob);
//       const age = today.diff(dob, 'years', true);
//       employee.age = parseFloat(age.toFixed(2));
//     }  
    
//     if (employee.resigndate) {
//       const resignDate = moment(employee.resigndate);
//       const today = moment();
//       if (resignDate.isSameOrBefore(today)) {
//         employee.status_active = 0;
//       } else {
//         employee.status_active = 1;
//       }
//     } else {
//       // Jika resigndate tidak diisi, set status_active default ke 1
//       employee.status_active = 1;
//     }

//   }
// };

const Employee = sequelize.define('m_employee', {
    employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nip: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
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
      bank_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bankaccountnumber: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      bankaccountname: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      hp: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      joindate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      worklength: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      jamsostek_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      no_bpjstk: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      no_bpjsks: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ptkp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      taxtype: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      taxirregular: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      taxfinal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sex: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      pob: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      age: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      agama: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      married: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      npwp: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      idtype: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      idnumber: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      photo: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      resigndate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      resigntype_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      resign_reason: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      status_active: {
        type: DataTypes.INTEGER,
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
      }
}, {
    tableName: 'm_employee',
    timestamps: false,
    // defaultScope: {
    //   include: [
    //     { model: Bank, as: 'bank', },
    //     { model: Company, as: 'company', },
    //     { model: Department, as: 'department', },
    //     { model: Employeestatus, as: 'employeestatus', },
    //     { model: Jamsostek, as: 'jamsostek', },
    //     { model: Position, as: 'position', },
    //     { model: Resigntype, as: 'resigntype', },
    //   ],
    // },
    // hooks: {
    //   beforeSave: (employee, options) => {
    //     calculateWorkLength(employee);
    //   },
    // },
});

// Employee.belongsTo(Bank, { as:'bank', foreignKey: 'bank_id', targetKey: 'bank_id', constraints: false });
// Employee.belongsTo(Company, { as:'company', foreignKey: 'company_id', targetKey: 'company_id', constraints: false });
// Employee.belongsTo(Department, { as:'department', foreignKey: 'department_id', targetKey: 'department_id', constraints: false });
// Employee.belongsTo(Employeestatus, { as:'employeestatus', foreignKey: 'employeestatus_id', targetKey: 'employeestatus_id', constraints: false });
// Employee.belongsTo(Jamsostek, { as:'jamsostek', foreignKey: 'jamsostek_id', targetKey: 'jamsostek_id', constraints: false });
// Employee.belongsTo(Position, { as:'position', foreignKey: 'position_id', targetKey: 'position_id', constraints: false });
// Employee.belongsTo(Resigntype, { as:'resigntype', foreignKey: 'resigntype_id', targetKey: 'resigntype_id', constraints: false });

module.exports = Employee;
