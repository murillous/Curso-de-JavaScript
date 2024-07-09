let grades = [100, 90, 30 ,70, 50, 10, 80]

let ordem = grades.sort(crescente)
ordem.forEach(print)

function crescente(x,y){
    return x-y
}

function print(element){
    console.log(element)
}