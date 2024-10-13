const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');
const SUsergroup = require('./s_usergroup');

const SUser = sequelize.define('s_user', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usergroup: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    nip: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    listemployeeid: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    useradded: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateadded: {
        type: DataTypes.DATE,
        allowNull: false
    },
    useredited: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateedited: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 's_user',
    timestamps: false
});
// Employee.belongsTo(Department, { as:'department', foreignKey: 'department_id', targetKey: 'TABLE_ID', constraints: false });
SUser.belongsTo(SUsergroup, { as:'usergroup', foreignKey: 'id_usergroup', targetKey: 'id_usergroup', constraints: false });

module.exports = SUser;
