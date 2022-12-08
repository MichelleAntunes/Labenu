/*# Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:


**Utilize o for...of para resolver**
```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia" // 0
"2 - Canadá" // 1
"3 - China"
"4 - EUA"
"5 - Brasil"
```
*/

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let [valor, pais] of maioresPaises.entries()) {
  console.log(` ${valor + 1}- ${pais} `);
}

/*for (let i = 0; i < maioresPaises.length; i++) {
  console.log(` ${i + 1} - ${maioresPaises[i]} `);
}
*/ // usando for normal

/*const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

for (const element of maioresPaises) {
  console.log(`${maioresPaises.indexOf(element) + 1} - ${element}`)
}*/
