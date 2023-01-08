module.exports = {
  friendlyName: 'Un follow user',

  description:
    'Remove the specified user to the list of users being followed by the current users.',

  inputs: {
    id: {
      type: 'string',
      required: true,
      description: 'The ID of the user to un-follow',
    },
  },

  exits: {
    success: {
      description: 'The current user is now un-followed the specified user',
    },
  },

  fn: async function (inputs, exits) {
    const userIdToFollow = inputs.id;
    const currentUserId = this.req.session.userId;
    await User.removeFromCollection(currentUserId, 'following', userIdToFollow);
    await User.removeFromCollection(userIdToFollow, 'followers', currentUserId);
    return exits.success();
  },
};
