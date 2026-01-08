import jwt from 'jsonwebtoken';
 

const AuthMiddleware = (req,res,next)=>{
    try{
    const token = req.cookies.token;
    console.log("Token from cookie:", token);
    
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access denied login required"
        });
    }
    

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

export default AuthMiddleware;







