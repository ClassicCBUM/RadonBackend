const express = require('express');
const router = express.Router();

const { createSurvey, getAllSurveys,deleteSurvey } = require('../controllers/surveyController');

router.route('/').post(createSurvey);
router.route('/').get(getAllSurveys);
router.route('/:id').delete(deleteSurvey);

module.exports = router;
