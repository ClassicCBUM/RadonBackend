const express = require('express');
const router = express.Router();

const { createQuestion, deleteQuestion, changeOrder, getQuestions, getQuestion } = require('../controllers/questionController');

router.route('/').post(createQuestion);
router.route('/').get(getQuestions);
router.route('/:id').get(getQuestion);
router.route('/:id').delete(deleteQuestion);
router.route('/:id').put(changeOrder);
router.route('/questionBulkCreate').post(createQuestions);

module.exports = router;