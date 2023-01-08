module.exports = {
  friendlyName: 'Create post',
  description: `Create a post`,

  inputs: {
    title: {
      type: 'string',
      required: true,
      description: 'Title of post',
    },
    body: {
      type: 'string',
      required: true,
      description: 'Body of post',
    },
  },

  exits: {
    success: {
      description: 'Post was successfully created',
    },
  },

  fn: async function (inputs, exits) {
    try {
      const userId = this.req.session.userId;

      await Post.create({
        title: inputs.title,
        body: inputs.body,
        user: userId,
      });
      return exits.success({ msg: 'Post successfully created' });
    } catch (error) {
      return exits({ msg: error.message });
    }
  },
};
