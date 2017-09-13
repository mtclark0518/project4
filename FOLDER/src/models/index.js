// define the database
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4');

//----------_------------------_-------------_----_---------
// import models as sequelize models
//----------_------------------_-------------_----_---------
const Center = sequelize.import('./center');
const Director = sequelize.import('./director');
const Teacher = sequelize.import('./teacher');
const Classroom = sequelize.import('./classroom');
const Student = sequelize.import('./student');
const Family = sequelize.import('./family');


//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------


Center.hasOne(Director);
Center.hasMany(Classroom, { as: 'Classrooms' });

Director.belongsTo(Center);
Director.hasMany(Teacher, { as: 'Teachers' });

Teacher.belongsTo(Director);
Teacher.belongsToMany(Classroom, { through: 'Room Assignment', as: 'CurrentTeacher' });

Classroom.belongsTo(Center);
Classroom.hasMany(Teacher, { as: 'Teachers' });
Classroom.hasMany(Student, { as: 'Students' });

Student.belongsToMany(Classroom, { through: 'Room Assignment', as: 'CurrentStudents' });
Student.belongsTo(Family);

Family.hasMany(Student);


// wrap up our models into a variable
var db = {};

db.models = {
    Center,
    Director,
    Classroom,
    Teacher,
    Student,
    Family,
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// send our models

module.exports = db;