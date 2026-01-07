const userService = require('../services/user.service');

exports.getUsers = (req, res) => {
    const users = userService.getAllUsers();

    res.status(200).json({
        success: true,
        data: users,
        message: "User fetched successfully"
    })
}



exports.signup = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required"
            })
        }
        const newUser = await userService.signup({
            name,
            email,
            password
        });
        res.status(201).json({
            success: true,
            data: newUser,
            message: "User signed up successfully"
        });

    } catch (error) {
        console.log("Signup error:", error.message);
        res.status(500).json({
            success: false,
            message: "error.message"
        });
    }
}