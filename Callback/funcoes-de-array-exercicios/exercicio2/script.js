/*
# Exercício 2
Crie um array de números que contenha 8 números.
Depois disso, utilize este array para criar duas funcões de array `map()`:

1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;*/

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

function multiplicacao3(array) {
  const resultado = array.map((elemento) => {
    return elemento * 3;
  });
  return resultado;
}

console.log(multiplicacao3(arrayNumeros));

function divisao2(array) {
  const resultado = array.map((elemento) => {
    return elemento / 2;
  });
  return resultado;
}
console.log(divisao2(arrayNumeros));
