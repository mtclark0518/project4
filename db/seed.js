const db = require('../models/index.js');
const DB = db.models;
const gryffindor = 'gryffindor'
const slytherin = 'slytherin'
const hufflepuff = 'hufflepuff'
const ravenclaw = 'ravenclaw'
const locations =[
    {
        name: 'gryffindor',
        studentCapacity: 24,
        students:[
            {
                firstName: 'harry',
                lastName: 'potter',
            }
        ]
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
        pin: 10000,
        location: 'gryffindor',
        
    },
    {
        firstName: 'ron',
        lastName: 'weasly',
        gender: 'male',
        pin: 10001,
        location: 'gryffindor'
        
    },
    {
        firstName: 'hermione',
        lastName: 'granger',
        gender: 'female',
        pin: 10002,
        location: 'gryffindor'
    },
    {
        firstName: 'angelina',
        lastName: 'johnson',
        gender: 'female',
        pin: 10003,
        location: 'gryffindor'
    },
    {
        firstName: 'hannah',
        lastName: 'abbot',
        gender: 'female',
        pin: 10004,
        location: 'hufflepuff'
    },
    {
        firstName: 'justin',
        lastName: 'finch-fletchley',
        gender: 'male',
        pin: 10005,
        location: hufflepuff
    },
    {
        firstName: 'susan',
        lastName: 'bones',
        gender: 'female',
        pin: 10006,
        location: hufflepuff        
    },
    {
        firstName: 'cedric',
        lastName: 'diggory',
        gender: 'male',
        pin: 10007,
        location: hufflepuff        
    },
    {
        firstName: 'ernie',
        lastName: 'macmillan',
        gender: 'male',
        pin: 10008,
        location: hufflepuff        
    },
    {
        firstName: 'terry',
        lastName: 'boot',
        gender: 'male',
        pin: 10009,
        location: ravenclaw        
    },
    {
        firstName: 'michael',
        lastName: 'corner',
        gender: 'male',
        pin: 10010,
        location: ravenclaw        
    },
    {
        firstName: 'padma',
        lastName: 'patil',
        gender: 'female',
        pin: 10011,
        location: ravenclaw        
    },
    {
        firstName: 'cho',
        lastName: 'chang',
        gender: 'female',
        pin: 10012,
        location: ravenclaw        
    },
    {
        firstName: 'luna',
        lastName: 'lovegood',
        gender: 'female',
        pin: 10013,
        location: ravenclaw        
    },
    {
        firstName: 'stewart',
        lastName: 'ackerley',
        gender: 'male',
        pin: 10014,
        location: ravenclaw        
    },
    {
        firstName: 'millicent',
        lastName: 'bulstrode',
        gender: 'female',
        pin: 10015,
        location: slytherin        
    },
    {
        firstName: 'vincent',
        lastName: 'crabbe',
        gender: 'male',
        pin: 10016,
        location: slytherin        
    },
    {
        firstName: 'gregory',
        lastName: 'goyle',
        gender: 'male',
        pin: 10017,
        location: slytherin        
    },
    {
        firstName: 'draco',
        lastName: 'malfoy',
        gender: 'male',
        pin: 10018,
        location: slytherin        
    },
    {
        firstName: 'blaise',
        lastName: 'zabini',
        gender: 'male',
        pin: 10019,
        location: slytherin        
    },
    {
        firstName: 'neville',
        lastName: 'longbottom',
        gender: 'male',
        pin: 10020,
        location: gryffindor        
    },


];
var createLocation = function() {
    return DB.Location.bulkCreate(locations);
}
var createStudents = function() {
    return DB.Student.bulkCreate(students, {include:[{associations: DB.Student.Location}]});
}

createStudents().then(createLocation().then(function() {
    process.exit();
}));
