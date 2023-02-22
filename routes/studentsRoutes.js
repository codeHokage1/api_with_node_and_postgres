const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')

router
    .get('/', studentController.getStudents)
    .get('/:id', studentController.getStudentById)
    .post('/', studentController.addStudent)

module.exports = router;