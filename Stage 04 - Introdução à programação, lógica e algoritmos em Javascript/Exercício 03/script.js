/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = prompt("Digite o primeiro número: ");
let numberTwo = prompt("Digite o segundo número: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

while(1){
  let op = prompt(
    `
    Digite a opção:
    
    OP - FUNÇÃO
    1  - soma
    2  - subtração
    3  - multiplicação
    4  - divisão
    5  - Resto da divisão
    6  - Sair
    `
    );
    
    op = Number(op);
    
    if(op == 1){
    const sum = numberOne + numberTwo;
    alert('Resultado final: ' + sum)
    }
    
    if(op == 2){
    const sub = numberOne - numberTwo;
    alert('Resultado final: ' + sub)
    }
    
    if(op == 3){
    const mult = numberOne * numberTwo;
    alert('Resultado final: ' + mult)
    }
    
    if(op == 4){
    const div = numberOne / numberTwo;
    alert('Resultado final: ' + div)
    }
    
    if(op == 5){
    const restDiv = numberOne % numberTwo;
    alert('Resultado final: ' + restDiv)
    }

    if(op == 6){
      break;
    }
    
}
