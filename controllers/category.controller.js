import Category from "../models/category.model.js"

export const createCatgory = async(req,res)=>{
    try {
        const cat = await Category.create(req.body);
        return res.status(200).json(cat);
    } catch (error) {
        return res.status(504).json({ message : error.message });
    }
}

export const getAllCategory = async(req,res)=>{
    try {
        const categorys = await Category.find({});
        return res.status(200).json(categorys);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

export const deleteCategory = async(req,res)=>{
    try {
        const {id} = req.parems;
        const cat = await Category.findByIdAndDelete(id);
        return res.status(200).json({message : "Category deleted."});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

export const updateCategory = async(req,res)=>{
    try {
        const {id} = req.parems;
        const cat = await Category.findByIdAndUpdate(id,req.body);
        return res.status(200).json({message : "Category update."});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}