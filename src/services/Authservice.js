const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');


exports.signup = async ({
    name,
    email,
    password
}) => {
    const existingUser = await user.findOne({
        email
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
        name,
        email,
        password: hashedPassword,
        provider: "local",
        role: "user"
    });

    const savedUser = await newUser.save();


    const userObj = savedUser.toObject();
    delete userObj.password;

    return userObj;
}


exports.login = async ({
    email,
    password
}) => {
    const existingUser = await user.findOne({
        email
    });
    if (!existingUser) {
        throw new Error("User does not exist");
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign({
            userId: user._id,
            role: user.role
        },
        process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        }

    );
    const userObj = existingUser.toObject();
    delete userObj.password;

    return ({
        user: userObj,
        token
    })
}