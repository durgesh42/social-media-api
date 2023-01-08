module.exports = async (req, res) => {
  const userIdToFollowing = req.params.id;
  const currentUserId = req.session.userId;
  //   console.log(`Followers ID ${userIdToFollowing} and User ID ${currentUserId}`);
  await User.addToCollection(currentUserId, 'following', userIdToFollowing);
  await User.addToCollection(userIdToFollowing, 'followers', currentUserId);
  res.end();
};
