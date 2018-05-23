module.exports = {


  
  fn: async function (inputs, exits) {
  	User.find().then(u => {
	  	exits.success(u);
  		
  	})
  }


};
