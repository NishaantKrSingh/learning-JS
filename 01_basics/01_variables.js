const accountID = 144553  //conat variable can't be changed
let accountEmail = "email@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //place can be reserved without defining but is not recommended
let accountState;
// accountID = 2 // not allowed because const variable

accountEmail = "mail@mail.com"
accountPassword = "54321"
accountCity = "bangaluru"

/*
Prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])