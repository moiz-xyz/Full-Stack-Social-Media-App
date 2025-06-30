import express from "express"
import user from "./auth/user.js"
import post from "./post/post.js"

const router = express.Router()
router.use("/auth", user)
router.use("/post", post)

export default router