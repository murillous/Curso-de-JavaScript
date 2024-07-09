//toLocaleString() = returns a string with a language
//                   sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 12345.678;

//myNum = myNum.toLocaleString("en-US"); //US English
//myNum = myNum.toLocaleString("pt-BR"); // Português Brasil

// myNum = myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

// myNum = myNum.toLocaleString(undefined, {style: "percent"})
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"})
console.log(myNum); 