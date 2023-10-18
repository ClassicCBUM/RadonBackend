module.exports =  (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: Sequelize.DataTypes.STRING
        },
        email: {
            type: Sequelize.DataTypes.STRING
        },
        password: {
            type: Sequelize.DataTypes.STRING
        }
    },
    {
        timestamps: false
    })
    return User;
}
