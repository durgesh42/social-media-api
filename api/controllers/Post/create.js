module.exports = async (req, res) => {
  try {
    await Post.create({ title: req.body.title, body: req.body.body });
    res.json({ msg: 'Post successfully created' });
  } catch (error) {
    res.json({ msg: error.msg });
  }
};
