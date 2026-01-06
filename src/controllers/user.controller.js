const userService = require('../services/user.service');

exports.getUsers =(req,res)=>{
const users=userService.getAllUsers();

    res.status(200).json({
        success:true,
        data:users,
        message:"User fetched successfully"
    })
}


exports.createUser =(req,res)=>{
    const {name , email}=req.body;

    if(!name || !email){
        return res.status(400).json({
            success:false,
            message:"Name and email are required"
        })
    }



const newUser = userService.createUser({name, email});

res.status(201).json({
    success:true,
    data:newUser,
    message:"User created successfully"
})
 }

//  exports.updateUser =(id,updatedData)=>{
//        const userIndex
// }