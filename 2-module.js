
//import modules
const {mahasiswa1,mahasiswa2,mahasiswa3} = require('../project1/4-names')
const [fungsibaru] = require('./5-utils')
const {items,person} = require('./6-alternative-flavor')
const {guru,lab} = require("./6-alternative-flavor2")
require("./7-mind-grenade")

console.log(fungsibaru);
console.log(mahasiswa1);
console.log(mahasiswa2);


fungsibaru(mahasiswa1);

console.log(items[0]);
console.log(person.nama)
console.log(guru);
console.log(lab);
