import { db } from '../models';
const DB = db.models;


const superAwesomeCenter = {
    name: 'Super Fun Time',
    director: {
        firstName: 'Celine',
        lastName: 'Fernandez'
    }
}

const testDirector = {
    firstName: 'Celine',
    lastName: 'Fernandez',
    center: 'Super Fun Time'

}


const createCenter = () => {
    return DB.Center.create({
        include: { association: DB.Center.Director }
    })
}
const createDirector = () => {
    return DB.Director.create({
        include: [{
            association: DB.Center.Director
        }]
    })
}

