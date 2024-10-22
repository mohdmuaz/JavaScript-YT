// Arrays Declaration

const firstMethodOfArray = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "Naagraj"]
// console.log(firstMethodOfArray);

const SecondMethodofArray = new Array(1,2,3,4,5);
// console.log(SecondMethodofArray[2]);


// Arrays Methods

// // push element in last index
// firstMethodOfArray.push(6);
// firstMethodOfArray.push(7);
// firstMethodOfArray.push(8);
// // automatically take last index element
// firstMethodOfArray.pop();
// console.log(firstMethodOfArray);

// // If you have to insert it in start
// firstMethodOfArray.unshift(9);
// // Same if want to delete first element.
// firstMethodOfArray.shift();
// console.log(firstMethodOfArray);


// console.log(firstMethodOfArray.includes(9));
// console.log(firstMethodOfArray.indexOf(4));
// console.log(firstMethodOfArray);


const newArr = firstMethodOfArray.join(); 
// console.log(firstMethodOfArray);
// console.log(newArr);


// Slice, Splice

console.log("A ", firstMethodOfArray);

const myn1 = firstMethodOfArray.slice(1,3);
console.log(myn1);
console.log("B", firstMethodOfArray);

const myn2 = firstMethodOfArray.splice(1,3);
console.log("C", firstMethodOfArray);
console.log(myn2);