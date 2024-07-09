// Map = object that holds key-value pair of any data type

const store = new Map([
    ["Camisa", 20],
    ["Jeans", 30],
    ["Meias", 10],
    ["Cuecas", 50],
])

let shoppingCart = 0

// .get pega o valor da chave
shoppingCart += store.get("Camisa")
shoppingCart += store.get("Jeans")
console.log(shoppingCart)

//.set adiciona chaves e valores novos
store.set("Chinelo", 100)

// .delete apaga chaves escolhidas
store.delete("Jeans")

// .has verifica se tem a chave no map
console.log(store.has("Camisa"))

// .size verfica a quantidade de elementos no map
console.log(store.size)


store.forEach((value,key) => console.log(`${key} $${value}`))