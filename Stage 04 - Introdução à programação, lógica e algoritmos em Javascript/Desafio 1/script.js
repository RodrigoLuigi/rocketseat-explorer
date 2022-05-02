let firstNumber = Number(prompt("Digite o primeiro número: "));
let secondNumber = Number(prompt("Digite o segundo número: "));

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const rest = firstNumber % secondNumber;

let op = Number(prompt(`
Digite a opção desejada:  

1.  SOMA: ${firstNumber} + ${secondNumber} = ${sum};
2.  SUBTRAÇÃO: ${firstNumber} - ${secondNumber} = ${sub};
3.  MULTIPLICAÇÃO: ${firstNumber} * ${secondNumber} = ${mult};
4.  DIVISÃO: ${firstNumber} / ${secondNumber} = ${div};
5.  RESTO DA DIVISÃO: ${firstNumber} % ${secondNumber} = ${rest};
`));

if(op == 1){
  
}
