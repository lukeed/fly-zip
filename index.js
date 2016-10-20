'use strict';

const p = require('path');
const JSZip = require('jszip');

module.exports = function () {
	const zip = new JSZip();

	this.plugin('zip', {every: 0}, function * (files, opts) {
		opts = Object.assign({
			dest: '.',
			name: 'archive.zip'
		}, opts);

		for (const file of files) {
			if (file.data) {
				zip.file(p.relative(this.root, p.format(file)), file.data, {base64: 1});
			}
		}

		const out = yield zip.generateAsync({type: 'nodebuffer'});

		yield this.$.write(p.resolve(opts.dest, opts.name), out);
	});
};
