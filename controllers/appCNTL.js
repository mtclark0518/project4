const db = require('../models');

const appCNTL = {

    launch: function(req, res) {
        res.sendFile(__dirname + '/index.html');
    },

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
    showStudent: function(req,res){
        db.models.Student.findOne({
            where: {
                pin: req.body.pin
            }
        }).then(student => {
            student.updateAttributes({
                locationId: req.body.location
            }).then(updatedStudent => {
                console.log(updatedStudent)
                res.json(student);
            })
            console.log('here is your student');
            res.json(student);
        });
    },
    updateStudent: function(req,res){
        console.log(req.body)
        db.models.Student.findOne({
            where: {
                id: req.body.id
            }
        }).then( (student) => {
            console.log('here is your student');
            res.json(student);
        } );
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
    },

    // studentLocations: function(req, res) {
    //     db.models.Location.findAll({
    //         include: [{
    //             model: db.models.Student,
    //             where: { locationId: Sequelize.col('location.id') }
    //         }]
    //     });
    // }

};



module.exports = appCNTL;