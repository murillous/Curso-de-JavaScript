let UserName = "Sérgio Murilo";
let phoneNumber = "123-456-789";

console.log(UserName.length);
// lenght serve pra contar quantos caracteres tem na string
console.log(UserName.charAt(0));
// charAt() serve pra exibir o caractere selecionado por extenso, dentro dos parentesis
console.log(UserName.indexOf("o"));
// indexOf() serve pra exibir primeiro caractere selecionado
console.log(UserName.lastIndexOf("o"));
// lastIndexOf("") serve pra exibir a posição do ultimo caractere selecionado
UserName = UserName.trim();
// trim() serve pra cortar os espaços antes e depois de uma string
UserName = UserName.toUpperCase();
// Serve deixar a string em maiuscúlo
UserName = UserName.toLowerCase();
// Serve pra deixar a string em minuscúlo

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(UserName);
console.log(phoneNumber);