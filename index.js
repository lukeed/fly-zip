var path = require('path');
var yazl = require('yazl');
var stat = require('fs').statSync;
var write = require('fs').writeFile;
var assign = require('object-assign');
var concat = require('concat-stream');

module.exports = function () {
	var opts;
	var self = this;
	var zip = new yazl.ZipFile();

	self.zip = function (options) {
		opts = opts || assign({
			base: '',
			compress: true,
			destination: this.root,
			filename: 'archive.zip'
		}, options || {});

		return self.unwrap(function (files) {
			files.forEach(handler);
		}).then(function () {
			zip.end(function () {
				zip.outputStream.pipe(concat(function (data) {
					return write(path.join(opts.destination, opts.filename), data, catcher);
				}));
			});
		});
	};

	function handler(realPath) {
		var metaPath = path.relative(opts.base, realPath);
		var stats = stat(realPath);

		if (stats.isDirectory()) {
			if (stats.nlink < 3) {
				zip.addEmptyDirectory(metaPath);
			}
		} else {
			zip.addFile(realPath, metaPath, opts);
		}
	}

	function catcher(err) {
		if (err) {
			self.emit('plugin_error', {
				plugin: 'fly-zip',
				error: err.message
			});
		}
	}
};
