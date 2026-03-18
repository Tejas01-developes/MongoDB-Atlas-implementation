import bcrypt from 'bcrypt';
import { deletequery, enterquery, getdata, getdata2, getdata3, getinfoquery, getquery, updatequery, usersentries } from "../service/queries.js";
import { db } from '../dbconnection/connection.js';


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



export const deleteuser=async(req,resp)=>{
    const{email}=req.body;
    if( !email){
        return resp.status(400).json({success:false,message:"no body recived"})
    }
   
    try{
    const entry=await deletequery({email:email})
    return resp.status(200).json({success:true,message:"deletation succesfully done"})
    }catch(err){
return resp.status(400).json({success:false,message:"failed to delete"})
    }
}


export const updateuser=async(req,resp)=>{
    const{email,password}=req.body;
    if( !email || !password){
        return resp.status(400).json({success:false,message:"no body recived"})
    }
   
    try{
        const getpass=await getinfoquery({email:email})
       
        const compare=await bcrypt.compare(password,getpass.password)
        if(compare){
            console.log("inside compare",compare);
            return resp.status(400).json({success:false,message:"same password as previous"})
        }
        console.log("outside compare",compare);
        const hash=await bcrypt.hash(password,10)
        console.log("update new hash pass",hash)
    const entry=await updatequery({email:email,password:hash})
    return resp.status(200).json({success:true,message:"updation succesfully done"})
    }catch(err){
return resp.status(400).json({success:false,message:"failed to update"})
    }
}






export const insertbulkentries=async(req,resp)=>{
    const users=[];

for(let i=0;i<=1000000;i++){
    users.push({name:`user${i}`,email:`user${i}@gmail.com`})
}

    try{
    const entriess=await usersentries(users)
    return resp.status(200).json({success:true,message:"user inserted succesfully"})
}catch(err){
    return resp.status(400).json({success:false,message:"insertion failed"})
}
}

export const getalldata=async(req,resp)=>{
    const{_id}=req.body;
    try{
 const gett=await getdata({id:_id})
 return resp.status(200).json({success:true,gett})       
    }catch(err){
return resp.status(400).json({success:false,message:"no data recived"})
    }
}


export const getalldata2=async(req,resp)=>{
    const{name}=req.body;
    try{
 const gett=await getdata2({name})
 return resp.status(200).json({success:true,gett})       
    }catch(err){
return resp.status(400).json({success:false,message:"no data recived"})
    }
}


export const getalldata3=async(req,resp)=>{
    const{email}=req.body;
    try{
 const gett=await getdata3({email})
 return resp.status(200).json({success:true,gett})       
    }catch(err){
return resp.status(400).json({success:false,message:"no data recived"})
    }
}