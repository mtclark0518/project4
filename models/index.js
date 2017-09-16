// define the database
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4');

//----------_------------------_-------------_----_---------
// import models as sequelize models
//----------_------------------_-------------_----_---------
const Teacher = sequelize.import('./teacher');
const Location = sequelize.import('./location');
const Student = sequelize.import('./student');

//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------
Location.hasMany(Student);
Location.hasMany(Teacher);
Student.belongsToMany(Location, { through: 'student_location' });
Teacher.belongsToMany(Location, { through: 'teacher_location' });


// wrap up our models into a variable
var db = {};

db.models = {
    // Center,
    Teacher,
    Location,
    Student,
    // Family,
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// send our models

module.exports = db;