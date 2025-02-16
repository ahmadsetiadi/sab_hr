const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database.js');

const SUsergroup = sequelize.define('s_usergroup', {
    id_usergroup: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    groupname: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
        
    },
    superuser: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
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
    tableName: 's_usergroup',
    timestamps: false
});

module.exports = SUsergroup;
