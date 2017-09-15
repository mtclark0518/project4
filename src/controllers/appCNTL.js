const db = require('../models');

const appCNTL = {

    launch: function(req, res) {
        res.sendFile(__dirname + '/index.html');
    },

    showLocations: function(req, res) {
        db.models.Location.findAll().then(function(locations) {
            console.log('here are your locations');
            res.json(locations);
        });
    }
};



module.exports = appCNTL;