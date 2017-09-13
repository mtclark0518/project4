import * as Sequelize from 'sequelize'
// define the database

const sequelize = new Sequelize( process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4' )

//----------_------------------_-------------_----_---------
// import models as sequelize models
//----------_------------------_-------------_----_---------
const Center = sequelize.import('./center')
const Director = sequelize.import('./director')
const Teacher = sequelize.import('./teacher')
const Classroom = sequelize.import('./classroom')
const Student = sequelize.import('./student')
const Family = sequelize.import('./family')
// family has one or two parents
// family has one or many students


//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------


//Center.hasOne(Director, {})
//Center.hasMany(Classroom, {})

//Director.belongsTo(Center)
//Director.hasMany(Teacher)

//Teacher.belongsTo(Director)
//Teacher.belongsToMany(Classroom)

//Classroom.belongsTo(Center)
//Classroom.hasMany(Teacher)
//Classroom.hasMany(Student)

//Student.belongsToMany(Classroom)
//Student.belongsTo(Family)

//Family.hasMany(Student)


// wrap up our models into a variable
const db = <any> {}
db.models = {
    Center,
    Director,
    // Classroom,
    Teacher,
    // Student,
    // Family,
}

db.Sequelize = Sequelize
db.sequelize = sequelize
// send our models
export { db }