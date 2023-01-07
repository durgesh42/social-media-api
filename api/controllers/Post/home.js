module.exports = async (req, res) => {
  // console.log(req);

  // await Post.destroy({});
  let posts = await Post.find().populate('user');
  res.json(posts);
};
