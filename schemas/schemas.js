import { ObjectId, Timestamp } from 'mongodb';
import mongoose from 'mongoose';


const userschema=new mongoose.Schema({
id:{
    type:ObjectId,
    require:true,
},
email:{
    type:String,
    require:true,
    unique:true
},
password:{
    type:String,
    require:true
},

    
},{timestamps:true}
)

export const schema=mongoose.model("users",userschema);