const db = require('../models');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    const { username, password } = req.body;
    const user = await db.User.findOne({ where: { username } });
    if (user) {
        res.status(StatusCodes.CONFLICT).send('User already exists');
    } else {
        const newUser = await db.User.create({ username, password });
        res.status(StatusCodes.CREATED).send(newUser);
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await db.User.findOne({ where: { username } });
    if (user) {
        if (user.password === password) {
            res.status(StatusCodes.OK).send(user);
        } else {
            res.status(StatusCodes.UNAUTHORIZED).send('Incorrect password');
        }
    } else {
        res.status(StatusCodes.NOT_FOUND).send('User not found');
    }
}

module.exports = {
    register,
    login
}
