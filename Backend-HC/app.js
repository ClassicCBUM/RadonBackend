const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// db
const db = require('./models');
async function syncDB() {
    await db.sequelize.sync();
}
syncDB();

// middleware
app.use(cors());
app.use(express.json());

// routers
const userRouter = require('./routes/userRoutes');
const surveyRouter = require('./routes/surveyRoutes');

// routes
app.use('/users', userRouter);
app.use('/surveys', surveyRouter);

// server
app.listen(3000, () => {
    console.log('server listening on port 3000');
});
