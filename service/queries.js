
import { ObjectId } from "mongodb";
import {db} from "../dbconnection/connection.js";





export const enterquery=async(data)=>{
   try{
const result=await db.collection("bulkies").insertOne({
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
 const result=await db.collection("bulkies").find().toArray();     
 if(!result){
   return null
 }  
 return result;        
 }catch(err){
 throw err
 }
 }

 export const getinfoquery=async(data)=>{
   try{
const result=await db.collection("bulkies").findOne({email:data.email},{projection:{password:1,_id:0}}); 
if(!result){
   return null
}      
return result      
}catch(err){
throw err
}
}




 export const deletequery=async(data)=>{
try{
const result=await db.collection("bulkies").deleteOne({email:data.email});
return result

}catch(err){
     throw err
}
 }



 export const updatequery=async(data)=>{
   console.log("entered update query")
  
   try{
   const result=await db.collection("bulkies").updateOne({email:data.email},{$set:{password:data.password}});
   return "success"
   
   }catch(err){
        throw err
   }
    }

  
    export const usersentries=async(data)=>{
      try{
      const insertt=await db.collection("entries").insertMany(data)
      return insertt
      }catch(err){
         throw err
      }
    }


    export const getdata=async(data)=>{
      console.log(data.id)
      try{
         const requestdata=await db.collection("entries").findOne({_id: new ObjectId(data.id)},{projection:{name:0,email:0}});
         if(!requestdata){
            return null
         }
         return requestdata
      }catch(err){
         throw err
      }
    }


    export const getdata2=async(data)=>{
      
      try{
         const requestdata=await db.collection("entries").findOne({name:data.name},{projection:{_id:0,email:0}});
         if(!requestdata){
            return null
         }
         return requestdata
      }catch(err){
         throw err
      }
    }


    export const getdata3=async(data)=>{
      
      try{
         const requestdata=await db.collection("entries").findOne({email:data.email},{projection:{_id:0,name:0}});
         if(!requestdata){
            return null
         }
         return requestdata
      }catch(err){
         throw err
      }
    }