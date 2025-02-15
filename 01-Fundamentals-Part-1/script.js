//Linking a javascript file


////////////////////////////////////////////////
// Values and Variables
/*
var firstName = `sanath`;
let name = `malitha`;
const pi = 3.14;

console.log(name);
*/
////////////////////////////////////////////////
// Data Types
/*
let variable = `kamal`;
variable = false;
variable = 10;
variable = 10.2;
variable = Symbol("foo");
variable = {};
console.log(typeof variable)
*/
////////////////////////////////////////////////
// Basic operators

/*

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/
//////////////////////////////////////////////////
//Strings and Template Literals
/*
let fName = 'Nimal';
let lName = 'Sumanasiri';
let age = 25;

let msg = fName+" "+lName+" is "+age+" years old.";
msg = `${fName} ${lName} is ${age} years old.`;

console.log(msg);

*/
//////////////////////////////////////////////////
//Flow controle (if/else Statements)

let age = 15;

if(age > 18) {
    console.log(`You can get the driving lisance.`);
}else if (age < 17){
    console.log(`You can get the driving lisance in after the next birthday.`);
}else{
    console.log(`You can't get the driving lisance.`);
}