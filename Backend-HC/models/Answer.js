module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define('Answer', {
        value: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        }
    })
    return Answer;
}