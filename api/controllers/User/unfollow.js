module.exports = async (req, res) => {
  const userIdToUnFollow = req.params.id;
  const currentUserId = req.session.userId;

  await User.removeFromCollection(currentUserId, 'following', userIdToUnFollow);
  await User.removeFromCollection(userIdToUnFollow, 'followers', currentUserId);

  res.end();
};
