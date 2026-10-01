import Product from "../models/Product.model.js"

export const createProduct = async(req,res)=>{
    try {
        const data = await Product.create(req.body);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(504).json({ message : error.message });
    }
}

export const getAllProduct = async(req,res)=>{
    try {
        const Products = await Product.find({});
        return res.status(200).json(Products);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.parems;
        const data = await Product.findByIdAndDelete(id);
        return res.status(200).json({message : "Product deleted."});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

export const updateProduct = async(req,res)=>{
    try {
        const {id} = req.parems;
        const data = await Product.findByIdAndUpdate(id,req.body);
        return res.status(200).json({message : "Product update."});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}