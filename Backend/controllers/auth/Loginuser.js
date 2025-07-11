import User from "../../modal/userAuth.js"
import bcrypt from 'bcryptjs'
import jwt  from "jsonwebtoken"

export const loginuser = async (req, res) => {

  const { email , password } = req.body
  try {
if (!(email && password) ) {
  return res.status(409).send({ status: 409, message: "Email or Password Required" })
}

const existeduser = await User.findOne( {email})
if (!existeduser) {
  return res.status(404).send({ status: 404, message: "User not found!" });
}

if (!existeduser){
    return res.status(402).send({ status: 402, message: "User Not found!"})
}

const compare_Password= await bcrypt.compare(password , existeduser.password)
   if (!compare_Password) {
       return res.status(401).send({ status: 401 , message: "Incorrect Password!", })
        }
        
   const token = jwt.sign({ _id: existeduser._id, email: existeduser.email }, process.env.SECRET_KEY, { expiresIn: "1h" })
       delete existeduser.password
        return res.status(200).send({ status: 200, message: "User logged in  Successfully!", data: existeduser, token: token })
    } 
    catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

