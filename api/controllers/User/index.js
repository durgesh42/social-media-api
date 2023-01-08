module.exports = async (req, res) => {
  const Users = await User.find()
  res.json(Users);
};
