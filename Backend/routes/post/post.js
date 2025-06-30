import express from "express"
import {
    createPost,
    getAllpost,
    getpostByusername
} from "../../controllers/index.js";

const router = express.Router();

router.post("/post", createPost);
router.get("/allpost", getAllpost);
router.get("/getpostByusername", getpostByusername);



export default router