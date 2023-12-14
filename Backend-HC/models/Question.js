module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('Question', {},
    {
        timestamps: false
    })
    return Question;
}