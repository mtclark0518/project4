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
        db.models.Teachers.findAll().then(function(teachers) {
            console.log('here are your teachers');
            res.json(teachers);
        });
    },
    findOrCreateTeacher: function(req, res) {
        db.models.Teachers.findOrCreate({ where: { auth: req.body.account_id } }).then(function(teacher) {
            console.log('heres your new or found teacher');
            res.json(teacher);
        });
    },


    //LOCATIONS
    showLocations: function(req, res) {
        db.models.Location.findAll().then(function(locations) {
            console.log('here are your locations');
            res.json(locations);
        });
    }
};



module.exports = appCNTL;