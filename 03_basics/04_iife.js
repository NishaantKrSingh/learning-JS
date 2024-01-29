// Immediately Invoked Function Expressions (IIFE)
//Used to get rid of pollution from global scope and execute a function immediately
(function chai(){
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED by ${name}`);
})("nishant")