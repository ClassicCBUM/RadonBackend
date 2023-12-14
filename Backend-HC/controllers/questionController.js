const db = require('../models');
const { StatusCodes } = require('http-status-codes');

const createQuestion = async (req, res) => {
    const newQuestion = await db.Question.create();
    res.status(StatusCodes.CREATED).send(newQuestion);
}

const createQuestions = async (req, res) => {
    const { questions } = req.body;
    const newQuestions = await db.Question.bulkCreate(questions);
    res.status(StatusCodes.CREATED).send(newQuestions);
}

const getQuestions = async (req, res) => {
    const questions = await db.Question.findAll();
    res.status(StatusCodes.OK).send(questions);
}

const getQuestion = async (req, res) => {
    const { id } = req.params;
    const question = await db.Question.findOne({ where: { id } });
    if (question) {
        res.status(StatusCodes.OK).send(question);
    } else {
        res.status(StatusCodes.NOT_FOUND).send('Question not found');
    }
}

const deleteQuestion = async (req, res) => {
    const { id } = req.params;
    const question = await db.Question.findOne({ where: { id } });
    if (question) {
        await question.destroy();
        res.status(StatusCodes.OK).send('Question deleted');
    } else {
        res.status(StatusCodes.NOT_FOUND).send('Question not found');
    }
}

const changeOrder = async (req, res) => {
    const { id } = req.params;
    const { newid } = req.body;
    const question = await db.Question.findOne({ where: { id } });
    if (question) {
        await question.destroy();
        const newQuestion = await db.Question.create({ id });
        const oldQuestion = await db.Question.create({ id: newid });
        res.status(StatusCodes.OK).send('Question order changed');
    } else {
        res.status(StatusCodes.NOT_FOUND).send('Question not found');
    }
}

module.exports = {
    createQuestion,
    createQuestions,
    getQuestions,
    getQuestion,
    deleteQuestion,
    changeOrder
}