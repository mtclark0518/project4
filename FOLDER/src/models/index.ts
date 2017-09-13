import * as Sequelize from 'sequelize'
// define the database

const sequelize = new Sequelize( process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4' )

//----------_------------------_-------------_----_---------
// import models as sequelize models
//----------_------------------_-------------_----_---------
const Center = sequelize.import('./center')
// center has zero or many users
// center has one and only one director (v0.0.0)

const Director = sequelize.import('./director')
// director belongs to one center
// director has many teachers
// director has many classrooms

const Teacher = sequelize.import('./teacher')
// teacher belongs to one CLASSROOM (at a time)
// teacher belongs to one and only one director
// teacher belongs to one and only one center

const Classroom = sequelize.import('./classroom')
// classroom has zero to many children
// classroom has zero to many teachers
// classroom belongs to one and only one director
// classroom belongs to one and only one center

const Children = sequelize.import('./children')
// student has one and only one family
// student has one assigned classroom (at a time)

const Family = sequelize.import('./family')
// family has one or two parents
// family has one or many students


//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------
//
// FAMILY has one or many STUDENTS
// STUDENT has one and only one FAMILY
// DIRECTOR 'EXTENDS?' USER
// CLASSROOM has zero or many STUDENTS
// CLASSROOM 




// wrap up our models into a variable
const db = <any> {}
db.models = {
    Center,
    Director,
    // Classroom,
    Teacher,
    // Children,
    // Family,
}

db.Sequelize = Sequelize
db.sequelize = sequelize
// send our models
export { db }