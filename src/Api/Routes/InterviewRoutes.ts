import express from 'express';
import InterviewController from '../Controllers/InterviewController';

const router = express.Router();
const interviewController = new InterviewController();

router.post('/interview/create', interviewController.createInterview);
router.get('/interview/:interviewId', interviewController.findInterviewById);
router.put('/interview/:interviewId', interviewController.updateInterview);
router.delete('/interview/:interviewId', interviewController.deleteInterview);

module.exports = router;