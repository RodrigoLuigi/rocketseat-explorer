/*
 Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário.
*/

let numberOne = prompt("Digite o primeiro número: ");
let numberTwo = prompt("Digite o segundo número: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const result = numberOne + numberTwo

alert("Resultado final: " + result);