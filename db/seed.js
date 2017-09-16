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
const home = {
    name: 'home',
    //set irrationally high for now but
    //as program builds this is set to enrollment number
    studentCapacity: 500
};


var students = [
    {
        firstName: 'harry',
        lastName: 'potter',
        gender: 'male',
        isPresent: false,
    },
    {
        firstName: 'ron',
        lastName: 'weasly',
        gender: 'male',
        isPresent: false,
    },
    {
        firstName: 'hermione',
        lastName: 'granger',
        gender: 'female',
        isPresent: false,
    }
];
var createLocation = function(location) {
    return DB.Location.create(location);
}
var createStudents = function() {
    return DB.Student.bulkCreate(students);
}

createStudents().then(createLocation(testLocation)).then(createLocation(anotherTest)).then(createLocation(home)).then(function() {
    process.exit();
});