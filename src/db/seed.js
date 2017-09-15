const db = require('../models/index.js');
const DB = db.models;

const testLocation = {
    name: 'classroom_1',
    studentCapacity: 24
};
const anotherTest = {
    name: 'classroom_2',
    studentCapacity: 17
};

var createLocation = function(location) {
    return DB.Location.create(location);
}

createLocation(testLocation).then(createLocation(anotherTest)).then(function() {
    process.exit();
});