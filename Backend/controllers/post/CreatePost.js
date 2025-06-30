import "dotenv/config";
import Post from "../../modal/postModal";

export const createPost = async (req, res) => {
  const {postTitle , postDiscription , authorName  } = req.body;
// is man cloudinary laga ni ha 
  try {
    const createPost = await Post.create({
    authorName ,     
    postTitle , 
    postDiscription,
    });

    return res.status(201).send({
      status: 201,
      message: "Post created successfully",
    });

  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: error.message || "Internal server error",
    });
  }
};
