// var generateName = require('sillyname');

import generateName from "sillyname"
var sillyName = generateName();

console.log(`my name is ${sillyName}.`)

import * as sh from "superheroes" 
console.log(`I am ${sh.random()}!`);