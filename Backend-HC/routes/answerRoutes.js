const express = require('express');
const router = express.Router();

const { createAnswer, getAnswer, deleteAnswer, getQuestionAnswers, getUserAnswers, deleteUserAnswers, deleteQuestionAnswers } = require('../controllers/answerController');

router.route('/').get(getAnswer);
router.route('/:id').delete(deleteAnswer);
router.route('/createAnswer').post(createAnswer);
router.route('/deleteUserAnswers').delete(deleteUserAnswers);
router.route('/deleteQuestionAnswers').delete(deleteQuestionAnswers);
router.route('/getQuestionAnswers').get(getQuestionAnswers);
router.route('/getUserAnswers').get(getUserAnswers);