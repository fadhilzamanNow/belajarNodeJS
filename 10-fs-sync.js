const {readFileSync, writeFileSync} = require('fs');

let first = readFileSync('./content/first.txt','utf-8');
let second = readFileSync('./content/second.txt','utf-8');

console.log(first,"\n",second);

writeFileSync('./content/gunakanwritefile.txt',`ini adalah text gabungan yang menggabungkan ${first} + ${second}`,{flag : 'a'})