const db = require('../models/index.js');
const DB = db.models;

const testLocation = {
    name: 'classroom_1',
    studentCapacity: 24
};

var createLocation = function() {
    return DB.Location.create(testLocation);
}

createLocation().then(function() {
    process.exit();
});
