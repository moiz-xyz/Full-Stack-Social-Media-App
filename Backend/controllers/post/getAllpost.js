import Post from "../../modal/postModal";

export const getAllpost = async (req, res) => {

    try {
        const AllPost = await Post.find();
        return res.status(200)
          .send({
            status: 200,
            message: "Get specific User getting Successfully!",
            data: AllPost,
          });
        
    } catch (error) {
      return res.status(500)
      .send({ 
        status: 500, 
        message: error.message  || "Internal server error "
    })

    }
};
