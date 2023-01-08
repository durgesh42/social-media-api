module.exports = {
  friendlyName: 'Show All Posts',

  description: `Display all the post posted by the users on the platform`,

  exits: {
    success: {
      description: 'All posts was retrieved successfully',
      outputType: 'ref',
    },
  },

  fn: async function (inputs, exits) {
    let posts = await Post.find().populate('user');
    return exits.success(posts);
  },
};
