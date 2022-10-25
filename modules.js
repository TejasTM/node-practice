
// common JS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./names');
const sayHi = require('./utils');
const alternate_export = require('./alternate-export');
 require('./grenade');

 
// console.log(alternate_export);
// sayHi("susan")
// sayHi(names.john)
// sayHi(names.peter)