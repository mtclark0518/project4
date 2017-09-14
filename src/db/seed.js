const db = require('../models/index.js');
const DB = db.models;
const Center = db.models.Center;
const Director = db.models.Director;

const superAwesomeCenter = {
    name: 'Super Fun Time',
    director: {
        firstName: 'Celine',
        lastName: 'Fernandez'
    }
};

const testDirector = {
    firstName: 'Celine',
    lastName: 'Fernandez',
    center: 'Super Fun Time'
};


const createCenter = function() {
    return Center.create(superAwesomeCenter, {
        include: [{ association: DB.Center.Director }]
    });
};
const createDirector = function() {
    return Director.create(testDirector, {
        include: [{ association: DB.Center.Director }]
    });
};

createCenter()
    // .then(createDirector())
    .then(function() {
        process.exit();
    });