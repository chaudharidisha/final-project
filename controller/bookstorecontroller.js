import Book from "../models/bookstore.model.js";

export const createData = async(req,res)=>{
       try {
        const data = await Book.create(req.body);
        return res.json({message : "Book Published", data});
       } catch (error) {
        console.log(error.message);
        return res.json({message : error.message});                  
       }
}

export const getAllbooks = async(req,res)=>{
       try {
              const data = await Book.find({});
              return res.json(data);
       } catch (error) {
              return res.json ({message : error.message});
       }
}

export const deletebooks = async(req,res)=>{
       try {
              const {id} = req.params;
              const data = await Book.findByIdAndDelete(id);
              return res.json({message : "Book Deleted", data: data});
       } catch (error) {
              return res.json({message : error.message});
       }
}

export const updatebooks = async(req,res)=>{
       try {
              const {id} = req.params;
              const data = await Book.findByIdAndUpdate(id, req.body);
              return res.json({message : "Book Updated", data: data});
       } catch (error) {
              return res.json({message : error.message});
       }
}