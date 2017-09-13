module.exports = function(sequelize, Sequelize) {
    var teacher = sequelize.define('teacher', {
        firstName: {
            type: sequelize.STRING
        },
        lastName: {
            type: sequelize.STRING
        },
        director: {
            type: sequelize.BOOLEAN
        }
    });
};