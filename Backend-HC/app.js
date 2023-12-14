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
app.use(cors({
    origin: 'http://localhost:8080'
}));
app.use(express.json());

// routers
const userRouter = require('./routes/userRoutes');
const surveyRouter = require('./routes/surveyRoutes');
const surveyStatusRouter = require('./routes/surveyStatusRoutes');
const questionRouter = require('./routes/questionRoutes');
const answerRouter = require('./routes/answerRoutes');

// routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/surveys', surveyRouter);
app.use('/api/v1/surveyStatus', surveyStatusRouter)
app.use('/api/v1/questions', questionRouter);
app.use('/api/v1/answers', answerRouter);

// server
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
