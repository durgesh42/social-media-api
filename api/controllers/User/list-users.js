module.exports = {
  friendlyName: 'List users',

  description: 'Return a list of all users in the database',

  exits: {
    success: {
      description: 'All users were retrieved successfully',
      outputType: 'ref',
    },
  },
  fn: async function (inputs, exits) {
    const users = await User.find();
    return exits.success(users);
  },
};
