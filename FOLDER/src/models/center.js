module.exports = function(sequelize, Sequelize) {
    var center = sequelize.define('center', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true
        }
    });
    return center;
};