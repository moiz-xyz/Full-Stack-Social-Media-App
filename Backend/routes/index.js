import express from "express"
import user from "./auth/user.js"

const router = express.Router()
router.use("/v1", user)

export default router