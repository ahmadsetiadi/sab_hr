const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("sinar_hr", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: console.log,
});

module.exports = sequelize;
