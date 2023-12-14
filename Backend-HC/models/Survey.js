module.exports =  (sequelize, Sequelize) => {
    const Survey = sequelize.define('Survey', {
        title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false
    })
    return Survey;
}
