module.exports = function(sequelize, Sequelize) {
    var director = sequelize.define('director', {

        firstName: {
            type: Sequelize.STRING,
            notNull: true
        },
        lastName: {
            type: Sequelize.STRING,
            notNull: true
        }
    });
    return director;
};