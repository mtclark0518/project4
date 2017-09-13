module.exports = function(sequelize, Sequelize) {
    var classroom = sequelize.define('classroom', {
        name: {
            type: Sequelize.STRING
        }
    });
    return classroom;
};