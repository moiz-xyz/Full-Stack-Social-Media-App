
import express from "express"
import {  CreateUser, loginuser } from "../../controllers/index.js";

const router = express.Router();

router.post("/signup" , CreateUser)
router.post("/login" , loginuser)


export default router
