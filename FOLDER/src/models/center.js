module.exports = function(sequelize, Sequelize) {
    var center = sequelize.define('center', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            primaryKey: true,
            notNull: true
        },
        director: {
            type: Sequelize.STRING,
            notNull: true,
        }
    });
    return center;
};