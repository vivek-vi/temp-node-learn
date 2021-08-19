//CommonJS, every file is module by default & it's used in the nodejs by default
// Modules - Encpsulated code (Only share minimum means only required)

const names = require('./4-names') //shared variables are invoked & able to see only those shared.
const sayHi = require('./5-utils')
const data = require('./6-alternateflavor')
require('./7-mind-granade')

console.log(data);
//console.log(names)




sayHi('vivek')
sayHi(names.jeevan)
sayHi(names.santosh)