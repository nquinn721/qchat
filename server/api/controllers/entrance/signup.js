module.exports = {

  // inputs: {

  //   userName: {
  //     required: true,
  //     type: 'string',
  //     description: 'This is the username of the end user',
  //     extendedDescription: 'Must be a valid user name.',
  //   },

  //   password: {
  //     required: true,
  //     type: 'string',
  //     maxLength: 200,
  //     example: 'passwordlol',
  //     description: 'The unencrypted password to use for the new account.'
  //   },

  // },


  exits: {

    // invalid: {
    //   responseType: 'badRequest',
    //   description: 'The provided fullName, password are invalid.',
    //   extendedDescription: 'If this request was sent from a graphical user interface, the request '+
    //   'parameters should have been validated/coerced _before_ they were sent.'
    // },

  },


  fn: async function (inputs, exits) {
    exits.success('hello');
    // var newEmailAddress = inputs.userName.toLowerCase();

    // // Build up data for the new user record and save it to the database.
    // // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    // var newUserRecord = await User.create({
    //   userName: newUserName,
    //   password: await sails.helpers.passwords.hashPassword(inputs.password),
    // })
    // .intercept({name: 'UsageError'}, 'invalid')
    // .fetch();

    // // Store the user's new id in their session.
    // this.req.session.userId = newUserRecord.id;

    // // Since everything went ok, send our 200 response.
    // return exits.success(newUserRecord);

  }

};
