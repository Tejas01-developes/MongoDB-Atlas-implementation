import {db} from "../dbconnection/connection.js";





export const enterquery=async(data)=>{
   try{
const result=await db.collection("users").insertOne({
name:data.name,
email:data.email,
password:data.password
})       
return result         
}catch(err){
throw err
}
}


export const getquery=async(data)=>{
    try{
 const result=await db.collection("users").find().toArray();       
 return result         
 }catch(err){
 throw err
 }
 }