module.exports =  (sequelize, Sequelize) => {
    const SurveyStatus = sequelize.define('SurveyStatus', {
        user_email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        survey_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        current_question: {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1,
        },
        is_completed: {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    )
    SurveyStatus.associate = (models) => {
        SurveyStatus.belongsTo(models.User, { foreignKey: 'user_email', targetKey: 'email' });
        SurveyStatus.belongsTo(models.Survey, { foreignKey: 'survey_id' });
    };
    return SurveyStatus;
}