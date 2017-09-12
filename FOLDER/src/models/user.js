module.exports = function(sequelize, Sequelize) {
    var user = sequelize.define('user', {
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