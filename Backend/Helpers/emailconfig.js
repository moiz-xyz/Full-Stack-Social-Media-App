import nodemiller from "nodemailer"
import 'dotenv/config'
const transporter = nodemiller.createTransport ({
    service : "gmail",
    auth : {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    }
})

export default transporter