/*# Exercício 2

Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

**Utilize o for...in para resolver**

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
```*/

const numero = +prompt("Digite o número que deseja ver a tabuada");
console.log(`Tabuada de ${numero}`);

/*for (let i = 0; i <= 10; i++) {
  console.log(` ${numero}X${i}= ${numero * i} `);
}  // usando for normal*/

for (let i = 1; i <= 10; i++) {
  let tabuada = [i * numero];
  for (let j in tabuada) console.log(` ${numero}X${i}= ${tabuada[j]} `);
} // usando for in
console.log(typeof numero);

/*function Tabuada() {
  let chamaTela = +document.getElementById("tela").value;
  let res = document.getElementById("res");
  let tabuada = "";
  for (let i = 1; i <= 10; i++) {
    tabuada += chamaTela + `X` + i + `=` + chamaTela * i + "<br>";
    res.innerHTML = tabuada;
  }
} */ // usando for in
