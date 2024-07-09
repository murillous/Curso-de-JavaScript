const RandomNumber = Math.floor(Math.random()*10 + 1);
let tentativas = 0;
//let botão = document.getElementById("botão")

function Clicar(){
    
    let Textbox = document.getElementById("Textbox");
    tentativas++;
    Textbox.innerHTML = `${tentativas} Tentivas!`

    let NumberBox = document.getElementById("NumberBox").value
    let resultado = document.getElementById("resultado")
    if(NumberBox == RandomNumber){
        resultado.innerHTML = `Você Acertou! O número era ${RandomNumber}`
    }
    if(RandomNumber > NumberBox){
        alert("Um pouco mais")
    }
    if(RandomNumber < NumberBox){
        alert("Um pouco menos")
    }
}

console.log(RandomNumber)