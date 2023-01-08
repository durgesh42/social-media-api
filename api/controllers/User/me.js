module.exports = {
  friendlyName: 'Show my profile',

  description: `Display the logged-in user's profile`,

  exits: {
    success: {
      description: 'User profile was retrieved successfully',
      outputType: 'ref',
    },
  },

  fn: async function (inputs, exits) {
    const userId = this.req.session.userId;

    const myProfile = await User.findOne(userId)
      .populate('followers')
      .populate('following');

    return exits.success(myProfile);
  },
};
