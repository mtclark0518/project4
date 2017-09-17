const db = require('../models');

const appCNTL = {

    launch: function(req, res) {
        res.sendFile(__dirname + '/index.html');
    },


    //index
    //show
    //create
    //update
    //destroy


    //TEACHERS(USERS)
    getTeachers: function(req, res) {
        db.models.Teacher.findAll().then(function(teachers) {
            console.log('here are your teachers');
            res.json(teachers);
        });
    },
    findOrCreateTeacher: function(req, res) {
        db.models.Teacher.findOrCreate({ where: { auth: req.body.account_id } }).then(function(teacher) {
            console.log('heres your new or found teacher');
            res.json(teacher);
        });
    },

    
    //STUDENTS
    getStudents: function(req, res) {
        db.models.Student.findAll().then(function(students) {
            console.log('here are the students');
            res.json(students);
        })
    },


    //LOCATIONS
    showLocations: function(req, res) {
        db.models.Location.findAll({
            include: [
                {
                    model: db.models.Student
                }
            ]
        }).then(function(locations) {
            console.log('here are your locations');
            res.json(locations);
        });
    }
};



module.exports = appCNTL;