module.exports = {
  friendlyName: 'Follow user',

  description:
    'Add the specified user to the list of users being followed by the current users.',

  inputs: {
    id: {
      type: 'string',
      required: true,
      description: 'The ID of the user to follow',
    },
  },

  exits: {
    success: {
      description: 'The current user is now following the specified user',
    },
  },

  fn: async function (inputs, exits) {
    const userIdToFollow = inputs.id;
    const currentUserId = this.req.session.userId;
    await User.addToCollection(currentUserId, 'following', userIdToFollow);
    await User.addToCollection(userIdToFollow, 'followers', currentUserId);
    return exits.success();
  },
};
