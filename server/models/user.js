const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you user database model methods here

// SIGN UP

class Users extends Model {
	constructor() {
		super('users');
	}

	isValidUsername (username) {
		var isValid = true;
		for (var i = 0; i < username.length; i++) {
			if (username.charCodeAt(i) < 97 || username.charCodeAt(i) > 122) {
				isValid = false;
				return isValid;
			}
		}
		return isValid;
	}

	isAvailable (username) {
  	
	}

 	isValidPassword (password) {
 		var isValid = true;
		for (var i = 0; i < username.length; i++) {
			if (username.charCodeAt(i) < 97 || username.charCodeAt(i) > 122) {
				isValid = false;
				return isValid;
			}
		}
		return isValid;
 	}

 	create(user) {
    user.password = utils.hashingFunction(user.password);
    return super.create.call(this, user);
  }
}



// take in username
// take in password
// put pw in hashing function
// for sing up, put that data in the table or say the username is in the table
// for sing in, compare that data to what's in the table, either sign them in or say invalid username/pw combo

