import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';
dotenv.config();


const client=new MongoClient(process.env.DB_LINK);

let db;
export const connect=async()=>{
try{
await client.connect();
 db=client.db(process.env.DB_NAME);
return console.log("mongodb connected")
}catch(err){
console.log("error",err)
}
}

export {db}



