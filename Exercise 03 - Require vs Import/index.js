// Require using cjs, import using mjs
// Type: module js treated as mjs
// Type: commonJs or ommited js treated as cjs
// import esModuleFunc from "./esmodule.mjs";
// import commonJsFunc from "./commonjs.cjs";
// const esModuleFunc = require("./esmodule.mjs");
// const commonJsFunc = require("./commonjs.cjs");
// esModuleFunc();
// commonJsFunc();
// Things to change:
// * type in package.json
// * import vs require
// * Extension in module: js, mjs, cjs
// * Extension in file: js, mjs, cjs

// 01. What is the difference between import and require?
// a. You can't selectively load only the pieces you need with require but with import,
// you can selectively load only the pieces you need, which can save memory.

// b. Loading is synchronous(step by step) for require on the other hand import can be
// asynchronous(without waiting for previous import) so it can perform a little better than require.

// c. To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.
// ES modules can be loaded dynamically via the import() function unlike require().

// d. One of the major differences between require() and import() is that require() can be called from anywhere
// inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

// e. The difference between require and import,
// is that require will automatically scan node_modules to find modules, but import, which comes from ES6, won't.

// 02. How can you enable using the import syntax using node js
// a. you should use .mjs to run the import or add to the package json type: module.
// For example:
// import fs from "fs";
// fs.writeFileSync("notes.txt", "This file was created by Node.js ");

// 04. Create 3 functions using the export/import syntax
// import { helloWorld, sum, helloName } from "./myFunctions.js";

// console.log(helloWorld());

// const sumVal = sum(2, 2);
// console.log(sumVal);

// console.log(helloName("Name"));

// 05. Import the file system module using the import syntax.
// import fs from "fs";
// const message = fs.readFileSync("./notes.txt", { encoding: "utf8"});
// console.log(message);

// 06. To give parameters when run node we need to give parameters:
// For example, node indexedDB.js a b c
// console.log(process.argv[0])
