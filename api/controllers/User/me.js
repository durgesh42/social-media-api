module.exports = async (req, res) => {
  const userID = req.session.userId;
  console.log('MY Profile', userID);

  const myProfile = await User.findOne(userID)
    .populate('followers')
    .populate('following');

  res.json(myProfile);
};
