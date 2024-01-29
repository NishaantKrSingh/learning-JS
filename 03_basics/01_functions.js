
function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    
}
// sayMyName()

// function addTwoNumbers(numbers1, numbers2){
//     console.log(numbers1 + numbers2);
// }

function addTwoNumbers(numbers1, numbers2){
    // let result = numbers1 + numbers2
    return numbers1 + numbers2
}
// const result = addTwoNumbers(2, 3)
// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");  
        return
    } 
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){ // the ... is rest operator and is called as spread operator also, the naming depends on the place it is being used
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "nishant",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

// handleObject(user)
// handleObject({
//     username: "nish",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]))