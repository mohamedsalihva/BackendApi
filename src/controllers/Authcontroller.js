const AuthService = require('../services/Authservice');


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
        const newUser = await AuthService.signup({
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

exports.login =async (req,res)=>{
    try {
        const {user ,token}= await AuthService.login(req.body);
        res.status(200).json({
            success:true,
            message:"User logged in successfully",
            data:{
                user,
                token
            }
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};