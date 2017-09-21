const db = require('../models');



    function launch(req, res) {
        res.sendFile(__dirname + '/index.html');
    }

    //TEACHERS(USERS)
    function getTeachers(req, res) {
        db.models.Teacher.findAll().then(function(teachers) {
            console.log('here are your teachers');
            res.json(teachers);
        });
    }

    //SHOW TEACHERS
    function showTeacher(req, res) {
        console.log(req.body)
        db.models.Teacher.findOrCreate({ where: { auth0: req.params.auth } }).then(function(teacher) {
            console.log('heres your new or found teacher');
            res.json(teacher);
        });
    }


    //STUDENTS
    function getStudents(req, res) {
        db.models.Student.findAll().then(function(students) {
            console.log('here are the students');
            res.json(students);
        })
    }

    function showStudent(req,res){
        
        console.log(req.params.id)
        const id = req.params.id
        db.models.Student.findOne({
            where: {
                id: id
            }
        })
        .then(student => {
            console.log('here is your student');
            res.json(student);
        })
    }
function updateStudent(req,res){
    console.log('updateStudentReqeust has been initiated')    
    console.log(req.body)
        db.models.Student.findOne({
            where: {
                id: req.params.id 
            }
        })
            .then(student => {
                console.log('first checkin')
                student.updateAttributes({
                    locationId: req.body.data
                })
                .then(updatedStudent => {
                    console.log('response prepared')
                    console.log(updatedStudent)
                    res.json(updatedStudent);
                })
            })
    }

    //LOCATIONS
    function showLocations(req, res) {
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

module.exports = {
    launch: launch,
    getTeachers: getTeachers,
    showTeacher: showTeacher,
    getStudents: getStudents,
    showStudent: showStudent,
    updateStudent: updateStudent,
    showLocations: showLocations
};