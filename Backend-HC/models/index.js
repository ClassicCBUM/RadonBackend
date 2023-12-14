require('dotenv').config({path:'../.env'});

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORTS
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
db.Survey = require('./Survey.js')(sequelize, Sequelize);
db.SurveyStatus = require('./SurveyStatus.js')(sequelize, Sequelize);
db.Question = require('./Question.js')(sequelize, Sequelize);
db.Answer = require('./Answer.js')(sequelize, Sequelize);
db.User.belongsToMany(db.Question, {as: "answeredQuestion", through: db.Answer});
db.Question.belongsToMany(db.User, {as: "userAnswer", through: db.Answer});

module.exports = db;