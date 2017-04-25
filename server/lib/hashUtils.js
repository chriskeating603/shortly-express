const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

module.exports = function (password) {
	return crypto.createHash('md5').update(password).digest('hex');
}

