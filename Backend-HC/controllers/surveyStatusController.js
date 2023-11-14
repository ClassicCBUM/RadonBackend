const db = require('../models');
require('dotenv').config({path:'../.env'});
const { StatusCodes } = require('http-status-codes');

const updateSurveyStatus = async (req, res) => {
    try {
      const questionId = req.params.questionId;
      const user_email = req.params.user_email;
      const survey_id = req.params.survey_id;
  
      const surveyStatus = await db.SurveyStatus.findOne({where: { user_email, survey_id },});
      if (!surveyStatus) {
        res.status(NOT_FOUND).json({ error: 'SurveyStatus not found' });
      }

      else {
        surveyStatus.questionId = questionId;
        await surveyStatus.save();
        res.json(surveyStatus);
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

const finishSurvey = async(req, res) => {
    try {
        const user_email = req.params.user_email;
        const survey_id = req.params.survey_id;

        const surveyStatus = await db.SurveyStatus.findOne({where: { user_email, survey_id },});
        if (!surveyStatus) {
            res.status(NOT_FOUND).json({ error: 'SurveyStatus not found' });
        }
        else {
            surveyStatus.is_completed = true;
            await surveyStatus.save();
            res.json(surveyStatus);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
  



module.exports = {
    updateSurveyStatus,
    finishSurvey,
}