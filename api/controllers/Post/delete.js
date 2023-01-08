module.exports = async (req, res) => {
  const id = req.params.id;
  try {
    await Post.destroyOne(id);
    res.json({ msg: `Post with ${id} delete successfully` });
  } catch (error) {
    res.json({ msg: error.msg });
  }
};
