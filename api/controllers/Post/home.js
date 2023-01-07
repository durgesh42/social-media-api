module.exports = async (req, res) => {
  // console.log(req);
  let posts = await Post.find();
  res.json(posts);
};
