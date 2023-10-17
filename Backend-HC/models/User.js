module.exports =  (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: Sequelize.Datatypes.STRING
        },
        email: {
            type: Sequelize.Datatypes.STRING
        },
        password: {
            type: Sequelize.Datatypes.STRING
        }
    },
    {
        timestamps: false
    })
    return User;
}
