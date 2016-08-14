Electron / TypeScript base application
======================================

This is meant as a starting point to writing an Electron application using TypeScript. Clone it, and you can start writing TypeScript 

Here's what it handles for you:
 * npm package configuration in [package.json] which installs all dependencies (dev & production) with `npm install`.
 * bare-bones hello-world interface showing Node access in Electron.

Note: This branch now uses TypeScript 2.0, which can make use of type definition
files in the npm `@types` namespace automatically. If you want to stick with
TypeScript 1.8, see the `typescript-1.8` branch.

Running
-------

 * Clone the repo.
 * `npm install`
 * `npm start`

Starting your project
---------------------

 * Delete this README.md and replace it with your own.
 * Update package.json with your application name, version, and author.
 
Development
-----------

`npm start` assumes you've already compiled your TypeScript files into javascript.
If you're using an IDE that supports the `compileOnSave` option in [tsconfig.json],
then that should all happen automatically. Otherwise, run `tsc -w` to auto-build.
 
TODO
----
 * npm scripts for building distributable apps.
 * Better Electron sample code. (Meanwhile, see: [electron-quick-start])

[typings]: https://www.npmjs.com/package/typings
[typings.json]: typings.json
[package.json]: package.json
[tsconfig.json]: tsconfig.json
[electron-quick-start]: https://github.com/electron/electron-quick-start