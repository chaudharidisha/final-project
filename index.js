import express from 'express';
import 'dotenv/config'
import db from './configs/db.js';
import bodyParser from 'body-parser';
import cors from "cors";
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import categoryRouter from './routes/category.route.js';
const app = express();
const port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(cors());

app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/category',categoryRouter);


app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server start");
        console.log("http://localhost:"+8081);
    }
})