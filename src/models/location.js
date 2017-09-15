module.exports = function(sequelize, Sequelize) {
    var location = sequelize.define('location', {
        name: {
            type: Sequelize.STRING
        },
        studentCapacity: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        currentStudents: {
            type: Sequelize.INTEGER,
            notNull: false
        }

    });
    return location;
};