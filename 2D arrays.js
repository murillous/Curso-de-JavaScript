// 2D array = An array of arrays

let fruits =        ["apples", "oranges", "bananas" ];
let vegetables =    ["carrots", "onions", "potatoes"];
let meats =         ["eggs", "chicken", "fish"      ];

let groceryList = [fruits, vegetables, meats];

groceryList[1][1] = "meio"

for(let list of groceryList){
    // console.log(list)
    for(let foods of list){
        console.log(foods)
    }
}