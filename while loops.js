// while loop = repear some code
//              while some condition is true
//              potentially infinite

let userName = "";

while(userName == null || userName == " "){
    userName = window.prompt("Enter your name:")
}

console.log("Hello", userName)