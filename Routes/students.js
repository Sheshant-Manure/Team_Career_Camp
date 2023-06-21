const express =require('express');
const router = express.Router();
const studentsController = require('../Controllers/students_controller');

router.post('/form', studentsController.addStudent);
router.post('/interview', studentsController.interviewUpdate);
router.get('/download-students-list', studentsController.downloadStudentsList);
router.get('/download-interviews', studentsController.downloadInterviews);

module.exports = router;
