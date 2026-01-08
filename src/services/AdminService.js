import User from "../models/User";

export const getAllUsersService = async()=>{
    return await User.find().select('-password');
};

export const deleteUserService = async(id)=>{
    await User.findByIdAndDelete(id);
};

export const updateUserService = async(id, userData)=>{
    return await User.findByIdAndUpdate(id, userData, {new: true}).select('-password');
};