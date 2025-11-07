const {addDays,formatDate} = require('./dist/index.cjs')

console.log(formatDate(new Date()))
console.log(addDays(new Date(),3))