'use strict';

const {format, relative, resolve} = require('path');
const JSZip = require('jszip');

module.exports = function (fly) {
	const zip = new JSZip();

	fly.plugin('zip', {every: 0}, function * (files, opts) {
		opts = Object.assign({
			dest: '.',
			name: 'archive.zip'
		}, opts);

		for (const file of files) {
			if (file.data) {
				zip.file(relative(this.root, format(file)), file.data, {base64: 1});
			}
		}

		const out = yield zip.generateAsync({type: 'nodebuffer'});

		yield this.$.write(resolve(opts.dest, opts.name), out);
	});
};
