import bcrypt from 'bcrypt';
import { enterquery, getquery } from "../service/queries.js";


export const registeruser=async(req,resp)=>{
    const{name,email,password}=req.body;
    if(!name || !email || !password){
        return resp.status(400).json({success:false,message:"no body recived"})
    }
    const hash=await bcrypt.hash(password,10);
    try{
    const entry=await enterquery({name,email,password:hash})
    return resp.status(200).json({success:true,message:"user entered"})
    }catch(err){
return resp.status(400).json({success:false,message:"user insertion failed"})
    }
}



export const getusers=async(req,resp)=>{
    // const{name,email,password}=req.body;
    // if(!name || !email || !password){
    //     return resp.status(400).json({success:false,message:"no body recived"})
    // }
    // const hash=await bcrypt.hash(password,10);
    try{
    const entry=await getquery()
    return resp.status(200).json({success:true,message:entry})
    }catch(err){
return resp.status(400).json({success:false,message:"failed to get info"})
    }
}
