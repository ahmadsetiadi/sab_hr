const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database'); // Adjust the path as necessary

// const { Op } = require('sequelize');

const VLeave = sequelize.define('v_leave', {
  leave_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  nip: DataTypes.STRING,
  name: DataTypes.STRING,
  periode: DataTypes.INTEGER,  
  startdate: DataTypes.DATE,
  enddate: DataTypes.DATE,
  
  totalleave: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0    
  },
  takenleave: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0    
  },

  publicleave: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0    
  },
  availableleave: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0    
  },
  sick: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0    
  },
  permit: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0    
  },
}, {
  tableName: 'v_leave',
  timestamps: false,  
});

module.exports = VLeave;
