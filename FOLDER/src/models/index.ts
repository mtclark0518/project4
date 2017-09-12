import * as Sequelize from 'sequelize'
// define the database
const sequelize = new Sequelize( process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4' )
// import models as sequelize models
const User = sequelize.import('./user')
const Director = sequelize.import('./director')
const Classroom = sequelize.import('./classroom')
const Student = sequelize.import('./student')
const Family = sequelize.import('./family')
const ProgramDay = sequelize.import('./programDay')

// define model relatioships




// wrap up our models into a variable
const db = <any> {}
db.models = {
    User,
    Director,
    Classroom,
    Student,
    Family,
    ProgramDay
}
db.Sequelize = Sequelize
db.sequelize = sequelize
// send our models
export { db }