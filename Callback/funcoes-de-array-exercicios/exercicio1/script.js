const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};
/*# Exercício 1

Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).
1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
saída esperada:

`{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`*/
function exercicio1(meuobjeto) {
  for (let i in objeto) {
    console.log(i, objeto[i].toUpperCase());
  }
}
exercicio1(objeto);

/*2. A segunda deve retornar os valores do objeto como texto corrido.*/

function exercicio2(meuobjeto) {
  console.log(
    `  ${objeto.nome} ${objeto.profissao} ${objeto.username} ${objeto.senha} `
  );
}
exercicio2(objeto);

/*3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.*/

function exercicio3(meuobjeto, callback) {
  console.log("Dentro Callback");
  const novo = callback(meuobjeto);
}

/*Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
Repita o processo para a funcão 2

*/
exercicio3(objeto, exercicio1);
