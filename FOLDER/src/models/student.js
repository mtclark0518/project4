module.exports = function(sequelize, Sequelize) {
    var student = sequelize.define('student', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
    return student;
};