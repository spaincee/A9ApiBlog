const {
  getAllPostsWithAuthor,
  createPost,
} = require("../../models/post.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const [result] = await getAllPostsWithAuthor();
    res.json(result);
  } catch (err) {
    res.json({ FatalError: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const [result] = await createPost(req.body);
    res.json(result);
  } catch (err) {
    res.json({ FatalError: err.message });
  }
});

module.exports = router;
