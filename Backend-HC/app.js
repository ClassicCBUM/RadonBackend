const express = require('express');
const app = express();
const cors = require('cors');
const Sequelize = require('sequelize');

// middleware
app.use(cors());
app.use(express.json());

// db
const sequelize = new Sequelize('radondb', 'cbum', 'classicCBUM', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
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

const db = require('./models');
async function syncDB() {
    await db.sequelize.sync();
}
syncDB();

// routers
const userRouter = require('./routes/userRoutes');

// routes
app.use('/users', userRouter);

// server
app.listen(3000, () => {
    console.log('server listening on port 3000');
});
