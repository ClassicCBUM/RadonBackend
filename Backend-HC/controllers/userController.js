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
            const surveyId = await db.User.findOne({where: id = 1});
            const newSurveyStatus = await db.SurveyStatus.create({
                user_email: newUser.email,
                survey_id: surveyId,
            });
            const responseData = {
                newUser: newUser,
                newSurveyStatus: newSurveyStatus,
              };
            res.status(StatusCodes.CREATED).send(responseData);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    register
}
