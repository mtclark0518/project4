module.exports = function(sequelize, Sequelize) {
    var student = sequelize.define('student', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        // birthday: {
        //     type: Sequelize.DATEONLY,
        //     notNull: true
        // },
        gender: Sequelize.STRING,
        isPresent: {
            type: Sequelize.BOOLEAN,
            notNull: true
        }
    });
    return student;
};