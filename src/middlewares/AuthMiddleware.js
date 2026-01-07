const jwt = require('jsonwebtoken');
 
const AuthMiddleware = (req,res,next)=>{
    try{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({
            success: false,
            message: "Access denied login required"
        });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    console.log("JWT_SECRET USED:", process.env.JWT_SECRET);


    req.user = decoded;
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

module.exports =AuthMiddleware;







