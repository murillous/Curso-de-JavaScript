// callback = a function passed as an argument
//            to another function.

//      Ensures that a function is not going
//      to run before a task is caompleted.
//      Help us develop asychronous code.
//      (When one function has to wait for another function)
//      that helps us avoid errors and potential problems
//      Ex. Wait for a file to load

sum(2, 3, DisplayConsole)

function sum(x, y, cb){
    let result = x + y
    cb(result)
}
function DisplayConsole(output){
    console.log(output)
}