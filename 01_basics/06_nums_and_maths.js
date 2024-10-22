// const score = 400;
// console.log(score);

// const balance = new Number(400);
// console.log(balance);


// // toString() convert yhe number in to string.
// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));


// // Precision make round off of any value.
// const otherNumber = 23.4567;
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));


// // toLocalString- return string with language sensitive representation
// const hundreds = 1000000;
// // Automaticaly it represent american standard
// console.log(hundreds.toLocaleString());
// // en-IN convert it into Indian formate.
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++Maths+++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// //round of any value
// console.log(Math.round(4.6));
// // Upper Value
// console.log(Math.ceil(4.2));
// // Lower Value
// console.log(Math.floor(4.9));
// // find minimum value in any array
// console.log(Math.min(4,3,6,1));
// // max value
// console.log(Math.max(4,3,6,1));


// The value random always come in between 0 and 1. 
console.log(Math.random());
// In this condition 0 maybe come
console.log(Math.random()*10);

console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;
// Formula for finding any random value in any range (IMP)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);