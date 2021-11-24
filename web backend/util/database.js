const Sequelize = require("sequelize");
const sequelize = new Sequelize('test','root', 'Mahad123#',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;
