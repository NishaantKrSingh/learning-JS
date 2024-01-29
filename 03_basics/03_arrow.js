const user = {
    username: "nishant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "nish"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "nishant"
//     console.log(this.username);
// }

// chai()

// Arrow functions

const chai = () => {
    let username = "hitesh"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username: "nishant"})

console.log(addTwo(3, 4));