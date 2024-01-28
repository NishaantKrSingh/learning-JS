// const tinderUser = new Object() OR

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nishant"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "name@gmail.com",
    fullname:{
        userfullname:{
            firstname: "nishant",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2) //empty array is assigned to store obj1 and obj2, if not assigned it is just stored on the first object

const obj3 = {...obj1, ...obj2} // combining by spreading which is easiest and latest way to do it
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "something@email.com"
    }
]
users[0].email
// console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'));