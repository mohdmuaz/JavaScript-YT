// const tinderuser = new Object()
// const tinderuser = {}
// There is no internal difference between 1st is made with constructor(singleton) and other is not.

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);



const regularUser = {
    email: "mmuaz1721@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mohd",
            lastname: "Muaz"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1, obj2, obj3};
// const obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(obj4);


const user = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    }
]
// user[1].email


// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('name'));
// console.log(tinderuser.hasOwnProperty('random'));


const course = {
    coursename: "JS in HIndi",
    price: "999",
    courseInstructor: "Hitesh"
}

// we do not write course.Instructor every time by using this-
const {courseInstructor: smallname} = course
// console.log(courseInstructor);
console.log(smallname);

