let row = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");
let symbols = window.prompt("Enter a symbol")

for(let i = 1; i <= row; i += 1){
    for(let j = 1; j <= columns; j += 1){
        document.getElementById("matriz").innerHTML += " " + symbols
    }
    document.getElementById("matriz").innerHTML += "<br>"
}