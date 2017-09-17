const db = require('../models/index.js');
const DB = db.models;

const locations =[
    {
        name: 'gryffindor',
        studentCapacity: 24
    },
    {
        name: 'slytherin',
        studentCapacity: 21
    },
    {
        name: 'hufflepuff',
        studentCapacity: 23
    },
    {
        name: 'ravenclaw',
        studentCapacity: 30
    }
];


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
var createLocation = function() {
    return DB.Location.bulkCreate(locations);
}
var createStudents = function() {
    return DB.Student.bulkCreate(students);
}

createStudents().then(createLocation().then(function() {
    process.exit();
}));
