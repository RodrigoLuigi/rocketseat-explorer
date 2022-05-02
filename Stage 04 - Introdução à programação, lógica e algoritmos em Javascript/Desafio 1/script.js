alert("Digite dois números e escolha uma opção no menu de calculos. ")

let firstNumber = Number(prompt("Digite o primeiro número: "));
let secondNumber = Number(prompt("Digite o segundo número: "));

let op;

while (op != 8) {
  op = Number(prompt(`
Digite a opção desejada:  

1.  SOMA
2.  SUBTRAÇÃO
3.  MULTIPLICAÇÃO
4.  DIVISÃO
5.  RESTO DA DIVISÃO
6.  VERIFICA SE SOMA È PAR OU IMPAR
7.  VERIFICA SE SÃO IGUAIS
8.  Sair
`));


  if (op == 1) {
    const sum = firstNumber + secondNumber;
    alert(`SOMA: ${firstNumber} + ${secondNumber} = ${sum}`);
  } else if (op == 2) {
    const sub = firstNumber - secondNumber;
    alert(`SUBTRAÇÃO: ${firstNumber} - ${secondNumber} = ${sub}`);
  } else if (op == 3) {
    const mult = firstNumber * secondNumber;
    alert(`MULTIPLICAÇÃO: ${firstNumber} * ${secondNumber} = ${mult}`);
  } else if (op == 4) {
    let div = firstNumber / secondNumber;
    div = div.toFixed(2);
    alert(`DIVISÃO: ${firstNumber} / ${secondNumber} = ${div}`);
  } else if (op == 5) {
    const rest = firstNumber % secondNumber;
    alert(`RESTO DA DIVISÃO: ${firstNumber} % ${secondNumber} = ${rest}`);
  } else if (op == 6) {
    const sum = firstNumber + secondNumber;
    const verify = sum % 2;
    if (verify == 0) {
      alert(`A soma dos números é Par!`);
    } else {
      alert(`A soma dos números é Impar!`);
    }
  } else if (op == 7) {
    if (firstNumber == secondNumber) {
      alert("Os números são iguais!")
    } else {
      alert("Os números são diferentes!")
    }
  } else if (op == 8) {
    alert("Encerrando aplicação . . .");
  } else {
    alert(`Opção inválida!`);
  }

}