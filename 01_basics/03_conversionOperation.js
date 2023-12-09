let score = "Nishant"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN (Not a Number)
//NaN is also considered as a number which checked with typeof
//true=> 1; false=> 0

let isLoggedIn = "nish"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber);


// ************************* Operations ****************************************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " nishant"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2) //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32
// // Happens because of standards of java script
// console.log((3+4) * 5 % 3); // not recommended and not a good practice to calculate multiple operations at once, when required use () brackets to streamline the calculation 
console.log(+true) // returns 1 because true stands for 1 and addition operator makes it count as a number
console.log(+"") // empty string represents false or 0 so when combined with addition operator it returns 0

let num1, num2, num3
num1 = num2 = num3 = 2+2
// console.log([num1, num2, num3])

let gameCounter = 100
// gameCounter++
// ++ gameCounter
console.log(gameCounter);

// prefix and postfix
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

