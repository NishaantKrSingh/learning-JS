console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

console.log("2" > 1)
console.log("02" > 1)
// data types are generally automatically converted but sometimes they may not provide desireable results
// It is recommended to compare values with same data type to provide required results
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// This shows JS doesn't give required results when data types are not same

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// strict check (===) checks strictly aka checks data types also
console.log("2" === 2); //false