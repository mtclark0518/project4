module.exports = function(sequelize, Sequelize) {
    var director = sequelize.define('director', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: sequelize.STRING,
            notNull: true
        },
        lastName: {
            type: sequelize.STRING,
            notNull: true
        }
    });
    return director;
};