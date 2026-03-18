import express from 'express';
import { deleteuser, getalldata, getalldata2, getalldata3, getusers, insertbulkentries, registeruser, updateuser } from '../controller/registerlogin.js';


const router=express.Router();



router.post("/",registeruser);
router.get("/get",getusers);
router.post("/delete",deleteuser);
router.post("/update",updateuser);
router.post("/bulk",insertbulkentries)
router.get("/getall",getalldata);
router.get("/getall2",getalldata2);
router.get("/getall3",getalldata3);

export default router