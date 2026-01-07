const express =require('express');
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.get("/profile",AuthMiddleware, (req,res)=>{
    res.json({
        success:true,
        message:"you are logged in",
        userFromToken:req.user
    });
});
 module.exports=router;