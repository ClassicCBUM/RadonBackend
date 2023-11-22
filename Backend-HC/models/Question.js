module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('Question', {
        type: {
            type: Sequelize.DataTypes.ENUM('text', 'radio', 'letter', 'checkbox'),
            allowNull: false
        }
    },
    {
        timestamps: false
    })
    return Question;
}