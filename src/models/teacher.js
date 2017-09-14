module.exports = function(sequelize, Sequelize) {
    var teacher = sequelize.define('teacher', {

        firstName: {
            type: Sequelize.STRING,
            notNull: true
        },
        lastName: {
            type: Sequelize.STRING,
            notNull: true
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            notNull: true
        }
    });
    return teacher;
};