/*Em uma escola são aplicadas 4 provas por bimestre, tendo como base o array de cada bimestre, crie um programa que mostre a média e soma das notas de cada bimestre.
Para esse programa, considere o seguinte formato:
bimestre1 = [ nota1, nota2, nota3, nota4 ] 
bimestre2 = [ nota1, nota2, nota3, nota4 ] 
bimestre3 = [ nota1, nota2, nota3, nota4 ] 
bimestre4 = [ nota1, nota2, nota3, nota4 ]

notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

Dica: Para percorrer array dentro de array, utilize dois laços
Como saída o programa deve exibir uma mensagem parecida com essa:

A soma das notas do bimestre 1 é: 40
A média do bimestre 1 é: 10

Exiba a mensagem para cada um dos bimestres*/

const notasBimestre1 = [10, 10, 10, 10];
const notasBimestre2 = [2, 3, 8, 2];
const notasBimestre3 = [10, 10, 7, 9];
const notasBimestre4 = [5, 5, 5, 5];

const notasDoAno = [
  notasBimestre1,
  notasBimestre2,
  notasBimestre3,
  notasBimestre4,
];

/*for (let i = 0; i < notasDoAno.length; i++) {
  let somaDasNotas = 0;
  let mediaDoBimestre = 0;
  for (let j = 0; j < notasDoAno[i].length; j++) {
    somaDasNotas += notasDoAno[i][j];
  }
  console.log(`A soma das notas do bimestre ${i + 1} é ${somaDasNotas}`);

  mediaDoBimestre = somaDasNotas / notasDoAno[i].length;
  console.log(`A média das notas do bimestre ${i + 1} é ${mediaDoBimestre}`); 
}
*/
//Altere o laço externo do programa interior para que seja um for...in

/*
com for in
for (let i in notasDoAno) {
  let somaDasNotas = 0;
  let mediaDoBimestre = 0;
  for (let j = 0; j < notasDoAno[i].length; j++) {
    somaDasNotas += notasDoAno[i][j];
  }
  console.log(`A soma das notas do bimestre ${+i + 1} é ${somaDasNotas}`);

  mediaDoBimestre = somaDasNotas / notasDoAno[i].length;
  console.log(`A média das notas do bimestre ${+i + 1} é ${mediaDoBimestre}`);
}*/

/* 
com for in e for of
for (let i in notasDoAno) {
  let somaDasNotas = 0;
  let mediaDoBimestre = 0;
  for (let j of notasDoAno[i]) {
    somaDasNotas += j;
  }
  console.log(`A soma das notas do bimestre ${+i + 1} é ${somaDasNotas}`);

  mediaDoBimestre = somaDasNotas / notasDoAno[i].length;
  console.log(`A média das notas do bimestre ${+i + 1} é ${mediaDoBimestre}`);
}*/

/*  sem lacos
let soma1 = Number();
for (let i of notasBimestre1) {
  i += notasBimestre1[i];
}
console.log(`A soma das notas do primeiro bimestre é ${i}`);
console.log(`A média do primeiro bimestre é ${i / 4}`);

let soma2 = Number();
for (let i in notasBimestre2) {
  soma2 += notasBimestre2[i];
}
console.log(`A soma das notas do segundo bimestre é ${soma2}`);
console.log(`A média do primeiro bimestre é ${soma2 / 4}`);

let soma3 = Number();
for (let i in notasBimestre3) {
  soma3 += notasBimestre3[i];
}
console.log(`A soma das notas do terceiro bimestre é ${soma3}`);
console.log(`A média do primeiro bimestre é ${soma3 / 4}`);
let soma4 = Number();
for (let i in notasBimestre4) {
  soma4 += notasBimestre4[i];
}
console.log(`A soma das notas do quarto bimestre é ${soma4}`);
console.log(`A média do primeiro bimestre é ${soma4 / 4}`);
*/
