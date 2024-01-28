const express = require('express');
const StudentController = require('../controllers/StudentController');

const router = express.Router();

router.get('/read',StudentController.ReadStudent, (req, res) => {
    
})

router.post('/create',StudentController.CreateStudent, (req, res) => {
    
})

router.put('/update',StudentController.UpdateStudent, (req, res) => {
    
})

router.delete('/delete',StudentController.DeleteStudent, (req, res) => {
    
})


module.exports = router