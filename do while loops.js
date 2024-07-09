// do while loop = do something first
//                 then check the condition,
//                 repeat if condition is true

let userName;

do{
    userName = window.prompt("Enter your name");
}while(userName == "")

console.log("Hello", userName);