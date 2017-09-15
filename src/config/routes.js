const express = require('express');
const router = express.Router();
const appCNTL = require('../controllers/appCNTL');

//set a home view out of habbit
router.get(appCNTL.launch);


//get teachers
router.get('/api/teachers', appCNTL.getTeachers);
//show or create a teacher
router.post('/api/teachers/:id', appCNTL.findOrCreateTeacher);


//show all possible locations
router.get('/api/locations', appCNTL.showLocations);
//add some locations
router.post('api/locations', appCNTL.createLocation);

module.exports = router;