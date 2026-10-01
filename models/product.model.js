import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    category: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    description : { type: String }
},{
    timestamps : true
})

const Product = mongoose.model('product',productSchema);

export default Product;

