module.exports = function(sequelize, Sequelize) {
    var teacher = sequelize.define('teacher', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
    return teacher;
};