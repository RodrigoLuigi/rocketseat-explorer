/*
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let list = [];
let op;

while(op != 3){
  op = Number(prompt(`
  Seja bem vindo! Digite o número da opção desejada:
  
  1. Cadastrar um item na lista
  2. Ver itens cadastrados
  3. Sair
  `));
  
  if(op == 1){
    const item = prompt("Digite o item a ser cadastrado: ");
    list.push(item);
  }
  if(op == 2){
    if(list == ''){
      alert("Não existem itens cadastrados!");
    }else{
      alert(list);
    }
  } 
  if(op == 3){
    alert('Adios!');
  } 
}

console.log(op, items);