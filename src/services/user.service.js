const bcrypt = require('bcrypt');
const user = require('../models/user');

exports.getAllUsers = ()=>{
    return user;
}

exports.signup = async ({name,email,password})=>{
    const existingUser =await user.findOne({email});
    if(existingUser){
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const  newUser =new user({
        name,
        email,
        password:hashedPassword,
        provider:"local",
        role:"user"
    });

   const savedUser = await newUser.save();

  
  const userObj = savedUser.toObject();
  delete userObj.password;

  return userObj;
}
