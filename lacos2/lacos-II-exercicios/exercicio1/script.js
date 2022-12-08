/*# Exercício 1

Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

```bash
Jogador 1: 13, 15, 25, 34, 35
Jogador 2: 30, 48, 30, 12, 47
```*/

const array = [
  [27, 4, 20, 13, 14], //0
  [11, 15, 12, 8, 9], //1
  [5, 5, 12, 16, 4], //2
  [20, 33, 11, 12, 19], //3
  [3, 3, 4, 5, 10], //4
];

/*for (let i = 0; i < array.length; i++) {
  console.log(`Jogador ${i + 1}: ${array[i]} `);
}
*/
/*for (const i of array) {
  console.log(`Jogador ${array.indexOf(i) + 1}: ${i}`);
}*/
for (let [valor, numeros] of array.entries()) {
  console.log(` Temporada ${valor + 1} - ${numeros} `);
}
