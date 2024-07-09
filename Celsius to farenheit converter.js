
function Clicar(){
    let valor = document.getElementById("TextBox").value
    valor = Number(valor)
    if(document.getElementById("Celsius").checked){
       valor = ToCelsius(valor)
       valor = Math.round(valor)
       return document.getElementById("resultado").innerHTML = valor + "°C"
    }
    else if (document.getElementById("Fahrenheit").checked){
        valor = ToFahrenheit(valor)
        valor = Math.round(valor)
        return document.getElementById("resultado").innerHTML = valor + "°F"
    }
    else{
        return document.getElementById("resultado").innerHTML = "Marca algo ai né cabeçudo"
    } 
}
function ToCelsius(temp){
    return (temp - 32) * (5/9)
}

function ToFahrenheit(temp){
    return temp * 9/5 + 32
}