/*
 *  Setup the db (init the tables to default/empty )
 */

 import { db } from '../models';
 db.sequelize.sync({force: true}).then(()=> {
     process.exit();
 })