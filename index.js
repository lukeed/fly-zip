var yazl = require('yazl');

module.exports = function () {
	var zip = new Yazl.ZipFile();

	this.filter('zip', function (data, opts) {
		opts = opts || {};
		opts.compress = typeof opts.compress === 'boolean' ? opts.compress : true;

		// zip.addBuffer(data, )
	}
};
