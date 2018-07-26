/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
  /**
   * Add your own Prompt questions here!
   */
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: '',
      default: 'My Awesome Project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    extra: {
      type: 'string',
      message: 'Extra Messaging!'
    }
  },

  /**
   * You can add a custom complete message
   */
  completeMessage: 'Project Complete!'
};
