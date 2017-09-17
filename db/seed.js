const db = require('../models/index.js');
const DB = db.models;


const locations =[
    {
        name: 'gryffindor',
        studentCapacity: 12,  
    },
    {
        name: 'slytherin',
        studentCapacity: 13
    },
    {
        name: 'hufflepuff',
        studentCapacity: 10
    },
    {
        name: 'ravenclaw',
        studentCapacity: 12
    }
];


var students = [
    {
        locationId: '1',
        firstName: 'harry',
        lastName: 'potter',
        gender: 'male',
        pin: 10000,
        
    },
    {
        locationId: '1',
        firstName: 'ron',
        lastName: 'weasly',
        gender: 'male',
        pin: 10001,
        
    },
    {
        locationId: '1',
        firstName: 'hermione',
        lastName: 'granger',
        gender: 'female',
        pin: 10002,
    },
    {
        firstName: 'angelina',
        lastName: 'johnson',
        gender: 'female',
        pin: 10003,
        locationId: '1'
    },
    {
        firstName: 'hannah',
        lastName: 'abbot',
        gender: 'female',
        pin: 10004,
        locationId: '3'
    },
    {
        firstName: 'justin',
        lastName: 'finch-fletchley',
        gender: 'male',
        pin: 10005,
        locationId: 3
    },
    {
        firstName: 'susan',
        lastName: 'bones',
        gender: 'female',
        pin: 10006,
        locationId: 3        
    },
    {
        firstName: 'cedric',
        lastName: 'diggory',
        gender: 'male',
        pin: 10007,
        locationId: 3        
    },
    {
        firstName: 'ernie',
        lastName: 'macmillan',
        gender: 'male',
        pin: 10008,
        locationId: 3        
    },
    {
        firstName: 'terry',
        lastName: 'boot',
        gender: 'male',
        pin: 10009,
        locationId: 4       
    },
    {
        firstName: 'michael',
        lastName: 'corner',
        gender: 'male',
        pin: 10010,
        locationId: 4        
    },
    {
        firstName: 'padma',
        lastName: 'patil',
        gender: 'female',
        pin: 10011,
        locationId: 4        
    },
    {
        firstName: 'cho',
        lastName: 'chang',
        gender: 'female',
        pin: 10012,
        locationId: 4        
    },
    {
        firstName: 'luna',
        lastName: 'lovegood',
        gender: 'female',
        pin: 10013,
        locationId: 4        
    },
    {
        firstName: 'stewart',
        lastName: 'ackerley',
        gender: 'male',
        pin: 10014,
        locationId: 4        
    },
    {
        firstName: 'millicent',
        lastName: 'bulstrode',
        gender: 'female',
        pin: 10015,
        locationId: 2        
    },
    {
        firstName: 'vincent',
        lastName: 'crabbe',
        gender: 'male',
        pin: 10016,
        locationId: 2        
    },
    {
        firstName: 'gregory',
        lastName: 'goyle',
        gender: 'male',
        pin: 10017,
        locationId: 2        
    },
    {
        firstName: 'draco',
        lastName: 'malfoy',
        gender: 'male',
        pin: 10018,
        locationId: 2        
    },
    {
        firstName: 'blaise',
        lastName: 'zabini',
        gender: 'male',
        pin: 10019,
        locationId: 2        
    },
    {
        firstName: 'neville',
        lastName: 'longbottom',
        gender: 'male',
        pin: 10020,
        locationId: 1        
    },


];
var createLocation = function() {
    return DB.Location.bulkCreate(locations);
}

var createStudents = function() {
    return DB.Student.bulkCreate(students)
}


createLocation()
    .then(createStudents()
    .then(function() {
        process.exit();
}))



