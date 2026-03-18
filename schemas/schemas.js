import { ObjectId, Timestamp } from 'mongodb';
import mongoose from 'mongoose';


const userschema=new mongoose.Schema({
id:{
    type:ObjectId,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},

    
},{timestamps:true}
)

// export const schema=mongoose.model("users",userschema);