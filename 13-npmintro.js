const lodash = require('lodash')


let awal = [1,[2,[3,[4]]]]

let perbaikan = lodash.flattenDeep(awal);
console.log(perbaikan);