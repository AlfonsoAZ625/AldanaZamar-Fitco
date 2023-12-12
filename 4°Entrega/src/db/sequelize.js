const { Sequelize } = require('sequelize');
const db = new Sequelize({
    host: 'localhost',
    port: "3306",
    database: 'icaro',
    dialect: 'mysql',
    username: 'root',
    password: 'alnso....',
});

module.exports = db


