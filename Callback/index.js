//console.log("Primeiro exercicio");

/*function multiplicarPor3(array) {
  const novoArray = [];
  for (elemento of array) {
    novoArray.push(elemento * 3);
  }
  return novoArray;
}

function numerosPares(array) {
  const novoArray = [];
  for (numero of array) {
    //acessa cada elemento da array e faz alguma acao
    if (numero % 2 === 0) {
      novoArray.push(numero);
    }
  }
  return novoArray;
}*/

const arrayNumeros = [10, 50, 100, 130, 20];
const arrayNumeros2 = [7, 3, 6, 8, 4, 2, 5];

/*console.log("Multiplica por 3 array 1:", multiplicarPor3(arrayNumeros));
console.log("Multiplica por 3 array 2:", multiplicarPor3(arrayNumeros2));
console.log("Números pares  array 1:", numerosPares(arrayNumeros));
console.log("Números pares  array 2:", numerosPares(arrayNumeros2));*/

/* Em seguida, crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console.*/

console.log("Segundo exercicio");

function novaFuncao(array, callback) {
  const novoArray = callback(array);
  console.log("Dentro da função", novoArray);
}

/*novaFuncao(arrayNumeros, multiplicarPor3);
novaFuncao(arrayNumeros, numerosPares);
novaFuncao(arrayNumeros2, multiplicarPor3);
novaFuncao(arrayNumeros2, numerosPares);*/

/*// Refaça o item “A primeira deve receber um array de números, e retornar todos os números do array, multiplicados por 3”, dessa vez utilizando a função de array map().*/

/* IMPORTANTE 
Para acessar o index vai ser necessário você passar até o segundo parâmetro do map(). Exemplo: array.map((element, index) => {} )*/

/*function multiplicarPor3map(array) {
  const novoArray = array.map((elemento, indice, array) => {
    console.log(elemento, indice, array);
  });
  //return novoArray
}
multiplicarPor3map(arrayNumeros);*/

function multiplicarPor3map(array) {
  const novoArray = array.map((elemento) => {
    return elemento * 3;
  });
  return console.log(novoArray);
}
//novaFuncao(arrayNumeros, multiplicarPor3map);

multiplicarPor3map(arrayNumeros);

/*
Refaça o item “A segunda deve receber um array de números, e retornar um array apenas com os números pares”, dessa vez utilizando a função filter()*/
// FILTER RETORNA BOLEANO

function retornaParesFilter(array) {
  return array.filter((elemento) => elemento % 2 === 0);
}

novaFuncao(arrayNumeros, retornaParesFilter);

// PARA GUARDAR NA CABEÇA
/*Com o array de pokémons do template, faça o seguinte:
Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;*/

//
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];
console.log("Pokemons sem alteração", pokemons);

const cura = (pokemons) => {
  //pokemon.vida = 100;
  return { ...pokemons, vida: 100 };
};
//cura(pokemons[0]); apenas testando

/*Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;*/

const pokemonsVidaCheia = pokemons.map((elemento) => {
  return cura(elemento);
});

console.log("Pokemons com a vida cheia", pokemonsVidaCheia);
/*Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumeimage.pngnto de callback, que deve retornar apenas os pokemons do tipo fogo.*/

const pokemonDeFogo = pokemons.filter((elemento) => {
  return elemento.tipo === "fogo";
});
console.log("Somente Pokemon de fogo", pokemonDeFogo);
