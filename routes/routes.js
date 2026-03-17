import express from 'express';
import { getusers, registeruser } from '../controller/registerlogin.js';


const router=express.Router();



router.post("/",registeruser);
router.get("/get",getusers);

export default router