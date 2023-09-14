//Cálculo e lógica
//Importando o módulo 
const readline = require('readline-sync')

const num1 = parseInt(readline.question("Digite o primeiro numero: \n"))
const num2 = parseInt(readline.question("Digite o segundo numero: \n"))


console.log("A divisão é: " + num1/num2);

console.log(`A soma é: ` + (num1+num2));
console.log(`A subtração é: ` + (num1-num2));
console.log("A multiplicação é: " + num1*num2);
