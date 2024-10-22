const marvel_heros = [ "Ironman", "Thor", "Spiderman"];
const dc_heros = ["Superman", "Batman", "Flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Concat - returns a new array, containing the joined arrays.
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


// Spread Operator(If you drop the glass it was shatered(bhikhar jana) same in this if you use spread operator in more than 1 or more than 1 arrays than it will shattered into 1 array)

const all_new_arrays = [...marvel_heros, ...dc_heros]
// console.log(all_new_arrays);




// const another_array = [1,2,3,[4,5,6],7,[1,2,3,[4,5]]]
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);



// Conversion

// console.log(Array.isArray("Muaz"));
// console.log(Array.from("Muaz"));
// console.log(Array.from({name: "Muaz"}));
//intrusting it give empty array beacouse it is not able to convert it aray.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));