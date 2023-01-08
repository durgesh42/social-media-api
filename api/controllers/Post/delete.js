module.exports = {
  friendlyName: 'Delete post',

  description: `Delete a post by its ID.`,

  inputs: {
    id: {
      type: 'string',
      required: true,
      description: 'The ID of the post to delete',
    },
  },

  exits: {
    success: {
      description: 'Post was deleted successfully',
    },
    notFound: {
      description: 'Post not found',
      responseType: 'notFound',
    },
  },

  fn: async function (inputs, exits) {
    const post = await Post.findOne({ id: inputs.id });

    if (!post) {
      return exits.notFound({
        msg: `There is no post with ID ${inputs.id} in the database`,
      });
    }

    await Post.destroyOne({ id: inputs.id });

    return exits.success({
      msg: `Post with ID ${inputs.id} deleted successfully`,
    });
  },
};
