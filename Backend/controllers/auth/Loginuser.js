import User from '../../modal/userAuth.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const loginuser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        status: 404,
        message: "User not found. Please register first.",
      });
    }

    // 2. Compare entered password with stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).send({
        status: 401,
        message: "Invalid email or password",
      });
    }

    // 3. Generate JWT Token
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    // 4. Send response
    return res.status(200).send({
      status: 200,
      message: "User logged in successfully",
      token,
      data: {
        username: user.username,
        email: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: error.message || "Internal server error",
    });
  }
};
