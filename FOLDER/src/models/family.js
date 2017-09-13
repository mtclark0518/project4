module.exports = function(sequelize, Sequelize) {
    var family = sequelize.define('family', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
    return family;
};