module.exports = function(sequelize, Sequelize) {
    var center = sequelize.define('center', {
        name: {
            type: Sequelize.STRING
        }
    });
    return center;
};