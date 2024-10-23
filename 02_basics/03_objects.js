// Objects declaration -> singleton , literals

// Singleton(If we made object with constructor then it will we singleton and when we make object with literals then it is not singleton)

// Object.create (This is constructor method or singleton)


// Objects Literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Muaz",
    "full name": "Mohd Muaz",
    [mySym]: "mykey1",
    age: 18,
    location: "Firozabad",
    email: "muaz@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// JsUser.email = "mmuaz@chatgpt.com"
// Object.freeze(JsUser);
// JsUser.email = "mmuaz@microsoft.com"
// console.log(JsUser);

JsUser.greeting1 = function(){
    console.log("Hello sb kese ho");
}
JsUser.greeting2 = function(){
    console.log(`Hello sb kese ho, ${this.name}`);
}
console.log(JsUser.greeting1());
console.log(JsUser.greeting2());