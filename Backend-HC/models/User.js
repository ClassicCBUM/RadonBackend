module.exports =  (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        timestamps: false
    })
    return User;
}
