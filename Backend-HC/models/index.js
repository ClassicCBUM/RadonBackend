require('dotenv').config({path:'../.env'});

const Sequelize = require('sequelize');
const sequelize = new Sequelize('radondb', 'cbum', 'classicCBUM', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432'
});

async function authenticateDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
authenticateDB();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./User.js')(sequelize, Sequelize);

module.exports = db;