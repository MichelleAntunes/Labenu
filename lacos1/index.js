/*Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.


Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
O resultado deve ser: 70*/

/*let numero = +prompt("Digite um número");

let resultadoSoma = 0;

while (numero !== 0) {
  resultadoSoma = resultadoSoma + numero;
  numero = +prompt("Digite um número");
}

console.log(resultadoSoma);*/

/*Vamos escrever um programa que recebe um número por input de usuário.
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.*/

/*const numero = +prompt("Digite um número");

for (let i = 0; i <= numero; i++) {
  console.log(i);
}
*/

/*Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
“O número do índice ${indice} é ${numero[indice]}”*/

/*const array = [5, 3, 8, 5, 1, 6, 9];

for (let i = 0; i < array.length; i++) {
  console.log(`O número do índice ${i} é ${array[i]}`);
}*/

//PARA GUARDAR NA CABEÇA
/*1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
“A”: Administrador;
“B”: Usuário comum;
“C”: Usuário assinante

Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, exibindo a mensagem: “Acesso negado.”
Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, e a mensagem “Boas-vindas, admin!” deve ser impressa.*/

/*let usuario = prompt(`Escolha seu usuário
A - Administrador
B - Usuário Comum
C - Usuário Assinante`).toUpperCase();

while (usuario !== "A") {
  alert("Acesso negado");
  usuario = prompt(`Escolha seu usuário
A - Administrador
B - Usuário Comum
C - Usuário Assinante`).toUpperCase();
}

console.log("Boas-vindas, admin");*/

//Exercicio

for (let i = 1; i <= 10; i++) {
  console.log(`2x ${i} = ${2 * i}`);
}

const numero = +prompt("Insira o número que você deseja a tabuada");
console.log(`Tabuada do ${numero}`);
for (let i = 1; i <= 10; i++) {
  let produto = numero * i;
  console.log(`${numero} X ${i}=${produto}`);
}

const array = ["amor", "familia", "dinheiro"];

for (let i = 0; i < array.length; i++) {
  console.log(`Palavras bonitas: ${array[i].toUpperCase().trim()}`);
}
