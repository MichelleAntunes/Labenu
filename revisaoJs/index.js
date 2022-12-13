/*console.log("Revisao JS Variaveis");
const nomeDoProduto = prompt("Digite o nome do seu produto");
let precoDoProduto = +prompt("Preço do produto");
precoDoProduto = precoDoProduto - 1;
console.log(`O preco do ${nomeDoProduto} é R$ ${precoDoProduto}`);

console.log("Revisao JS Artméticos");

const num1 = +prompt("Insira o primeiro número");
const num2 = +prompt("Insira o primeiro número");

console.log(`A soma do ${num1} com o ${num2} é de ${num1 + num2}`);
console.log(`A subtração do ${num1} com o ${num2} é de ${num1 - num2}`);
console.log(`A multiplicação do ${num1} com o ${num2} é de ${num1 * num2}`);
console.log(`A divisão do ${num1} com o ${num2} é de ${num1 / num2}`);
console.log(`O resto do ${num1} com o ${num2} é de ${num1 % num2}`);

console.log("Revisao JS Comparadores");

const numeroSorteado = Math.floor(Math.random() * 10) + 1; //sortear numero aleatorio. * 10 e +1 para ser de 1 até 10. Sem o +1 seria de 0 até 10
const numeroRecebido = +prompt("Insira um número");

if (numeroSorteado === numeroRecebido) {
  console.log(
    `O numero sorteado ${numeroSorteado} é exatamente igual ao número recebido ${numeroRecebido}`
  );
} else if (numeroSorteado > numeroRecebido) {
  console.log(
    `O numero sorteado ${numeroSorteado} é menor que número recebido ${numeroRecebido}`
  );
} else {
  console.log(
    `O numero sorteado ${numeroSorteado} é menor que número recebido ${numeroRecebido}`
  );
}

console.log("Revisao JS Operadores Lógicos");

const idadeDaPessoa = +prompt("Insira a sua idade");
const alturaDaPessoa = +prompt("Insira a sua altura em cm");
const temProblemaCardiaco = confirm(
  "Voce tem problemas cardiacos? Se sim, clique em OK. Se Não, clique em cancelar"
);

console.log(
  `O usuário possui ${idadeDaPessoa} anos, mede ${alturaDaPessoa}cm e a informação se tem problema cardiaco é: ${temProblemaCardiaco}`
);

if (
  idadeDaPessoa >= 18 &&
  alturaDaPessoa >= 160 &&
  temProblemaCardiaco === false
) {
  console.log("Acesso autorizado");
} else if (
  idadeDaPessoa < 18 &&
  alturaDaPessoa >= 160 &&
  temProblemaCardiaco === false
) {
  console.log("Idade minima permitida é 18");
} else if (
  idadeDaPessoa >= 18 &&
  alturaDaPessoa < 160 &&
  temProblemaCardiaco === false
) {
  console.log("Altura minima permitida é 160cm");
} else if (
  idadeDaPessoa >= 18 &&
  alturaDaPessoa >= 160 &&
  temProblemaCardiaco === true
) {
  console.log("Não é autorizado pessoas com problemas cardiacos");
} else if (
  idadeDaPessoa >= 18 &&
  alturaDaPessoa < 160 &&
  temProblemaCardiaco === false
) {
  console.log("Altura minima permitida é 160cm");
} else {
  console.log(
    "Você não cumpriu nenhum dos requisitos para entrar no brinquedo"
  );
}

console.log("Revisao JS Strings");

const frase = " Hoje eu vou comer cenoura, ebaaa ";

console.log(`A frase ${frase} possui ${frase.length} caracteres`);

console.log(`A frase ${frase.trim()} possui ${frase.length} caracteres`);

console.log(`A frase somente em letras minusculas é: ${frase.toLowerCase()} `);

console.log(
  `Essa frase tem a palavra comer? Resposta: ${frase.includes("comer")} `
);
console.log(
  `Essa frase tem a palavra batata? Resposta: ${frase.includes("batata")} `
);

const novaFrase = frase.replaceAll("cenoura", "batata");
console.log(`A nova frase é: ${novaFrase}`);
console.log(
  `Essa frase tem a palavra comer? Resposta: ${novaFrase.includes("comer")} `
);
console.log(
  `Essa frase tem a palavra batata? Resposta: ${novaFrase.includes("batata")} `
);

console.log("Revisao JS Arrays");

const listaDeCompras = ["batata", "cenoura", "beterraba"];
console.log(`Meu primeiro item da lista de compras é: ${listaDeCompras[1]}`);
console.log(`Tamanho da lista é: ${listaDeCompras.length}`);

listaDeCompras.push("Mandioca");
console.log(`Minha lista com alteração é: ${listaDeCompras}`);

console.log(`Tem cenoura na lista? ${listaDeCompras.includes("cenoura")}`);

console.log(`Tem morango na lista? ${listaDeCompras.includes("morando")}`);

listaDeCompras.splice(1, 1); // deleta a quantidade do segundo numero a partir do primeiro numero
console.log(`Nova lista sem o indice 1: ${listaDeCompras}`);*/

console.log("Revisao JS Arrays");
