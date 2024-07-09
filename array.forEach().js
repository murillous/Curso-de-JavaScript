// array.forEach() = executes a provided call back function
//               once for each array element


students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print)


function capitalize(ValorAtual,Indice,ArrayCompleto,){
    ArrayCompleto[Indice] = ValorAtual[0].toUpperCase() + ValorAtual.substring(1)
}

function print(element){
    console.log(element)
}