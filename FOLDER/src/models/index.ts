import * as Sequelize from 'sequelize'

const sequelize = new Sequelize( process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4' )


const db = <any> {}


db.Sequelize = Sequelize
db.sequelize = sequelize
export { db }