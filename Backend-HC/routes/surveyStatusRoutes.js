const express = require('express');
const router = express.Router();

const { updateSurveyStatus, finishSurvey } = require('../controllers/surveyStatusController');

router.route('/').post(updateSurveyStatus);
router.route('/').get(finishSurvey);

module.exports = router;
