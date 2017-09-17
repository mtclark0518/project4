module.exports = function(sequelize, Sequelize) {
    var teacher = sequelize.define('teacher', {
        auth0: {
            type: Sequelize.STRING,
            notNull: true
        },
        firstName: {
            type: Sequelize.STRING,
            notNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            notNull: false
        },
        // isAdmin: {
        //     type: Sequelize.BOOLEAN,
        //     notNull: true
        // }
    });
    return teacher;
};