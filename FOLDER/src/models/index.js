// define the database
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4');

//----------_------------------_-------------_----_---------
// import models as sequelize models
//----------_------------------_-------------_----_---------
const Center = sequelize.import('./center');
const Teacher = sequelize.import('./teacher');
const Classroom = sequelize.import('./classroom');
const Student = sequelize.import('./student');
// const Family = sequelize.import('./family');


//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------

Center.hasMany(Classroom);
Center.hasMany(Teacher);
Center.hasMany(Student);

Classroom.belongsTo(Center);
Teacher.belongsTo(Center);
Student.belongsTo(Center);

Teacher.hasMany(Student);
Classroom.hasMany(Student);

Teacher.belongsToMany(Classroom, { through: 'classroom_teacher' });
Classroom.belongsToMany(Teacher, { through: 'classroom_teacher' });

Student.belongsToMany(Classroom, { through: 'student_classroom' });
Student.belongsToMany(Teacher, { through: 'student_teacher' });

// wrap up our models into a variable
var db = {};

db.models = {
    Center,
    Teacher,
    Classroom,
    Student,
    // Family,
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// send our models

module.exports = db;