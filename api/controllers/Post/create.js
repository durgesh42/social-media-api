module.exports = async (req, res) => {
  try {
    const userId = req.session.userId;

    await Post.create({
      title: req.body.title,
      body: req.body.body,
      user: userId,
    });

    res.json({ msg: 'Post successfully created' });
  } catch (error) {
    res.json({ msg: error.msg });
  }
};
