const db = require('../models');
require('dotenv').config({path:'../.env'});
const { StatusCodes } = require('http-status-codes');

const createSurvey = async (req, res) => {
    try {
        const { title, description } = req.body;
        const survey = await db.Survey.findOne({ where: { title } });

        if (survey) {
            res.status(StatusCodes.CONFLICT).send('Survey already exists');
        } else {
            const newSurvey = await db.Survey.create({ title, description });
            res.status(StatusCodes.CREATED).send(newSurvey);
        }
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};


const getAllSurveys = async (req, res) => {
    try {
        const apiKey = req.headers.apikey;
        if (!apiKey || apiKey !== process.env.DATABASE_APIKEY) {
            res.status(StatusCodes.CONFLICT).send('WRONG API KEY OR NO API KEY PROVIDED');
        }
        else {
            const allSurveys = await db.Survey.findAll();
            if(allSurveys.length === 0) {
                res.status(StatusCodes.NOT_FOUND).json({ error: 'No surveys found' });
            }
            else {
                res.status(StatusCodes.OK).json(allSurveys);
            }
        }
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};

const deleteSurvey = async (req, res) => {
    try {
        const apiKey = req.headers.apikey; 
        if (!apiKey || apiKey !== process.env.DATABASE_APIKEY) {
            res.status(StatusCodes.CONFLICT).send('WRONG API KEY OR NO API KEY PROVIDED');
        } else {
            const surveyId = req.params.id;
            const survey = await db.Survey.findByPk(surveyId);

            if (!survey) {
                res.status(StatusCodes.NOT_FOUND).json({ error: 'Survey not found' });
            } else {
                await survey.destroy();
                res.status(StatusCodes.OK).send('Survey with id ' + req.params.id + ' deleted successfully');
            }
        }
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};



module.exports = {
    createSurvey,
    getAllSurveys,
    deleteSurvey
}