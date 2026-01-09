import Products from "../models/Products.js";

export const createProductService = async (productData) => {
        return await Products.create(productData);
};

export const getAllProductService = async ()=>{
        return await Products.find();
};

export const  getSingleProductService = async (id) =>{
    return await Products.findById(id);
};

export const updateProductService = async (id, updateData) =>{
    return await Products.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteProductService = async (id) =>{
    return await Products.findByIdAndDelete(id);
};
