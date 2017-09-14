module.exports = function(sequelize, Sequelize) {
    var classroom = sequelize.define('classroom', {
        name: {
            type: Sequelize.STRING
        },
        studentCapacity: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        nickname: Sequelize.STRING


    });
    return classroom;
};