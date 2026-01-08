import {
    getAllUsersService,
    deleteUserService,
    updateUserService
} from "../services/AdminService.js";



export const getAllUsersController = async (req, res) => {

    const users = await getAllUsersService();
    res.status(200).json({
        success: true,
        data: users,
        message: "Users fetched successfully"
    });
};

export const deleteUsersController = async (req, res) => {
    await deleteUserService(req.params.id);
    res.status(200).json({
        success:true,
        message:"User deleted successfully"
    });
};

export const updateUsersController = async (req,res)=>{
    const user = await updateUserService(req.params.id, req.body);
    res.status(200).json({
        success:true,
        data:user,
        message:"User updated successfully"
    });
}
    
