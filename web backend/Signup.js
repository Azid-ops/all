// const db = require('./util/database');
const Sequelize = require('sequelize');

const sequelize = require('./util/database');

const signUp = sequelize.define('signup', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    fname:Sequelize.STRING,
    lname:Sequelize.STRING,
    password:Sequelize.STRING,
    retype:Sequelize.STRING,
});
module.exports = signUp;