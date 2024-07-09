let counter = 0

document.getElementById("diminuir").onclick = function(){

    counter -=1
    document.getElementById("contador").innerHTML = counter
}
document.getElementById("resetar").onclick = function(){

    counter = 0
    document.getElementById("contador").innerHTML = counter
}
document.getElementById("aumentar").onclick = function(){

    counter +=1
    document.getElementById("contador").innerHTML = counter
}