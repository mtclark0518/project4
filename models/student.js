var db = require('./index');

const Location = db.Location

module.exports = function(sequelize, Sequelize) {
    var student = sequelize.define('student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        locationId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            get(){
                // const house = this.getDataValue('locationId');
                return this.getDataValue('locationId');
            },
        },
        house: {
            type: Sequelize.INTEGER,
            set(dataValue) {
                console.log(dataValue)
                this.setDataValue('house', dataValue);
            }
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        gender: Sequelize.STRING,
        pin: {
            type: Sequelize.INTEGER,
            notNull: true
        },

    });
    return student;
};