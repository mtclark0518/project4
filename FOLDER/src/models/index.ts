import * as Sequelize from 'sequelize'

const sequelize = new Sequelize( process.env.DATABASE_URL || 'postgress://TheTDrive@localhost:5432/project4' )


const db = <any> {}
export { db }