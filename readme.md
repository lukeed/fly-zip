# fly-zip [![][travis-badge]][travis-link] [![npm package][npm-ver-link]][npm-pkg-link]

> ZIP compress files with Fly.

## Install

```
npm install --save-dev fly-zip
```

## Usage

This will produces a ZIP at `releases/Archive.zip`, containing all contents within the `dist` directory.

```js
exports.zip = function * (fly) {
  yield fly.source('dist/**/*').zip({
    dest: 'releases',
    file: 'Archive.zip'
  });
};
```

## API

### .zip(options)

#### options.dest

Type: `string`<br>
Default: `'.'`

The directory where the ZIP should be placed. Defaults to Fly's root directory, where `flyfile.js` is located.

#### options.file

Type: `string`<br>
Default: `'archive.zip'`

The name of your ZIP file. It must include `.zip`.

## License

MIT © [Luke Edwards](https://lukeed.com)


[npm-pkg-link]: https://www.npmjs.org/package/fly-zip
[npm-ver-link]: https://img.shields.io/npm/v/fly-zip.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-zip
[travis-badge]: http://img.shields.io/travis/lukeed/fly-zip.svg?style=flat-square
