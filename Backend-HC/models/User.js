module.exports =  (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: Sequelize.DataTypes.STRING,
            unique: true
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    })
    return User;
}
