import Post from "../../modal/postModal"

export const getpostByusername = async (req, res) => {
    try {
        const postByusername = await Post.findOne({ username: req.query.username });
        return res.status(200)
            .send({
                status: 200,
                message: "Get specific User getting Successfully!",
                data: postByusername
            })
    } catch (error) {
        return res.status(500)
            .send({
                status: 500,
                message: error.message || 'Internal server error'
            })

    }

}