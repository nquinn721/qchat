module.exports = {


  
  fn: async function (inputs, exits) {
  	let user = await User.find();
  	exits.success(user);
  }


};
