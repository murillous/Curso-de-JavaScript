// How to accept user input

//EASY WAY with a window prompt

// let username = window.prompt("Qual é o seu nome?");
// console.log(username);

//HARD WAY HTML textbox

let username;

document.getElementById("MyButton").onclick = function(){

    username = document.getElementById("MyText").value;
    console.log(username);

}