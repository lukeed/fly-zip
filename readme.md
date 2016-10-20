<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> ZIP compress files with Fly.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```a
npm install -D fly-zip
```

## Example

Produces a ZIP at `./archives/Archive.zip` with all contents inside `dist/`, including empty directories.

```js
exports.zip = function * () {
  yield this.source('dist/**/*')
    .zip({
      base: 'dist',
      destination: 'archives',
      filename: 'Archive.zip',
    })
};
```

## API

#### base

> Type: `String`. <br>
**Recommended**

The base directory from which all sources are found. This string is stripped from the final contents' filepaths.

For example, compressing `dist/**/*` without specifying `base: 'dist'` will produce a new `dist/` directory when extracted.

#### compress

> Type: `Boolean`<br>
> Default: `true`

If the ZIP file should compress its contents.

#### destination

> Type: `String`<br>
> Default: `'.'`

The name of the directory to write to. Defaults to the current root directory.

#### filename

> Type: `String`<br>
> Default: `'archive.zip'`

The name of your ZIP file. The `filename` must include `.zip`.

## License

MIT © [Luke Edwards](https://lukeed.com)


[releases]:     https://github.com/lukeed/fly-zip/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-zip
[npm-ver-link]: https://img.shields.io/npm/v/fly-zip.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-zip.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-zip
[travis-badge]: http://img.shields.io/travis/lukeed/fly-zip.svg?style=flat-square
