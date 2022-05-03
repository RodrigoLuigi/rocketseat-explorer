const studentList = [{
    name: 'Rodrigo',
    firstNote: 8,
    secondNote: 7
  },
  {
    name: 'Larissa',
    firstNote: 5.3,
    secondNote: 7.2
  },
  {
    name: 'Luiz',
    firstNote: 4,
    secondNote: 6
  },
  {
    name: 'Joana',
    firstNote: 3,
    secondNote: 8
  }
];

function averageCalc(firstNote, secondNote){
const average = ((firstNote + secondNote) / 2).toFixed(1);

return average;
}

function printStudentAverage(student){
  const average = averageCalc(student.firstNote, student.secondNote)

  if( average >= 7){
    return `
    A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns ${student.name}! Você foi aprovado(a) no concurso!
    `;
  }else{
    return `
    A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez ${student.name}! Tente novamente!
    `;
  }
  
}

for (let student of studentList) {
  let avegareMessage = printStudentAverage(student);
  alert(avegareMessage);
}