import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const createUser = async(req,res)=>{
    try {
        const data = await User.create(req.body);
        return res.status(200).json({status: true, message : "Register success."});
    } catch (error) {
        return res.status(500).json({status: false, message : error.message});
    }
}

export const loginUser = async(req,res)=>{
    try {
        console.log(req.body);
        
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(200).json({status : false, message : 'Email and password required.'});
        }

        const user = await User.findOne({ email });

        if(!user){
            return res.status(200).json({status : false, message : 'User not exist'});
        }

        if(user.password != password){
            return res.status(200).json({status : false , message : 'Password not match'});
        }

        const payload = {
            id : user.id,
            name : user.name,
            role : user.role
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET);

        return res.status(200).json({status: true, message : 'Login success.', token})

    } catch (error) {
        return res.status(500).json({status: false, message : error.message});
    }
}