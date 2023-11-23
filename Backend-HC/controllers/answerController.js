const db = require('../models');
const { StatusCodes } = require('http-status-codes');

const createAnswer = async (req, res) => {
    const { questionId, userId, answer } = req.body;
    const newAnswer = await db.Answer.create({ questionId, userId, value: answer });
    res.status(StatusCodes.CREATED).send(newAnswer);
}

const deleteAnswer = async (req, res) => {
    const { id } = req.params;
    const answer = await db.Answer.findOne({ where: { id } });
    if (answer) {
        await answer.destroy();
        res.status(StatusCodes.OK).send('Answer deleted');
    } else {
        res.status(StatusCodes.NOT_FOUND).send('Answer not found');
    }
}

const getQuestionAnswers = async (req, res) => {
    const { questionId } = req.body;
    const answers = await db.Answer.findAll({ where: { questionId } });
    res.status(StatusCodes.OK).send(answers);
}

const getUserAnswers = async (req, res) => {
    const { userId } = req.body;
    const answers = await db.Answer.findAll({ where: { userId } });
    res.status(StatusCodes.OK).send(answers);
}

const getAnswer = async (req, res) => { 
    const { userId, questionId } = req.body;
    const answer = await db.Answer.findOne({ where: { userId, questionId } });
    if (answer) {
        res.status(StatusCodes.OK).send(answer);
    } else {
        res.status(StatusCodes.NOT_FOUND).send('Answer not found');
    }
}

const deleteUserAnswers = async (req, res) => {
    const { userId } = req.body;
    const answers = await db.Answer.findAll({ where: { userId } });
    if (answers) {
        await answers.destroy();
        res.status(StatusCodes.OK).send('Answers deleted');
    } else {
        res.status(StatusCodes.NOT_FOUND).send('Answers not found');
    }
}

const deleteQuestionAnswers = async (req, res) => {
    const { questionId } = req.body;
    const answers = await db.Answer.findAll({ where: { questionId } });
    if (answers) {
        await answers.destroy();
        res.status(StatusCodes.OK).send('Answers deleted');
    } else {
        res.status(StatusCodes.NOT_FOUND).send('Answers not found');
    }
}

module.exports = {
    createAnswer,
    deleteAnswer,
    getQuestionAnswers,
    getUserAnswers,
    getAnswer,
    deleteUserAnswers,
    deleteQuestionAnswers
}