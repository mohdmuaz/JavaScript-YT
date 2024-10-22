const  mydate = new Date();
// console.log(mydate);
// console.log(`toString: ` , mydate.toString());
// console.log(`toISOString: ` , mydate.toISOString());
// console.log(`toJSON: `, mydate.toJSON());
// console.log(`toLocaleDateString: `, mydate.toLocaleDateString());
// console.log(`toLocaleString: `, mydate.toLocaleString());
// console.log(`toLocaleTimeString: `, mydate.toLocaleTimeString());


const myCreatedDate = new Date(2002, 7, 12, 5, 3);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());

const anotherCreatedDate = new Date("12-08-2002");
// console.log(anotherCreatedDate.toLocaleString());


const myTimeStamp = Date.now();

// // These are in miliseconds
// console.log(myTimeStamp);
// console.log(anotherCreatedDate.getTime());

// // Convert it into seconds
// console.log(Math.floor(Date.now()/1000));

const newDate = new Date();

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getTime());

