import express from 'express';
import dotenv from 'dotenv';
import { connect } from './dbconnection/connection.js';
import router from './routes/routes.js';
dotenv.config();


const app=express();
connect();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/apis",router);

app.listen(3000,()=>{
    console.log("port started on the port 3000")
})
