module.exports = async (req, res) => {
  console.log(req);
  const Users = await User.find();
  res.json(Users);
};
