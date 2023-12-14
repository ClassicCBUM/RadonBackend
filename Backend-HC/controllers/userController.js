const db = require('../models');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await db.User.findOne({ where: { email } });
        if (user) {
            res.status(StatusCodes.CONFLICT).send('User already exists');
        } else {
            const newUser = await db.User.create({ email });
            const surveyId = await db.Survey.findOne({
                attributes: ['id'], // Select only the 'id' column
                order: [['id', 'ASC']], // Order by 'id' in ascending order
                limit: 1, // Limit the result set to 1 row
              });
            console.log(surveyId);
            const newSurveyStatus = await db.SurveyStatus.create({
                user_email: newUser.email,
                survey_id: surveyId.id,
            });
            const responseData = {
                newUser: newUser,
                newSurveyStatus: newSurveyStatus,
              };
            res.status(StatusCodes.CREATED).send(responseData);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const login = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await db.User.findOne({ where: { email } });
        if (user) {
            res.status(StatusCodes.OK).send(user);
        } else {
            res.status(StatusCodes.NOT_FOUND).send('User not found');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    register,
    login
}
