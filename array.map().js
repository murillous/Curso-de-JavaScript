// array.map() = executes a provided call back function
//               once for each array element
//               AND creates a new array

let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map(square)
squares.forEach(print)


function square(elements){
    return Math.pow(elements, 2)
}
function print(element){
    console.log(element)
}
 