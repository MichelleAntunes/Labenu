/*# Exercício 3

Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

```
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
```

a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”*/

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
const copiaPokemon1 = {
    ...pokemon1,
	nome: "Squirtle",
	tipo: "Água",

}

/*b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.*/

pokemon1.ataques = []

/*c-) crie um objeto de `ataque` com a estrutura abaixo e o adicione no array `ataques` utilizando `**push()**`

nome: Investida,
dano: 40,
tipo: Normal,
precisao: 100,
*/

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    preciao: 100
} //novo objeto

pokemon1.ataques.push(ataque)


/**c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original;*/

copiaPokemon1.ataques = [...pokemon1.ataques]

/*d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**; no array de `ataques`*/

pokemon1.ataques.push({
    nome:"Folha Naval",
    dano:45,
    tipo: "Grama",
    preciao:100})

/*e) para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array.*/

copiaPokemon1.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    preciao: 100
}) 

/*f) Imprima os dois objetos  do tipo pokemon no console.
*/

console.log("Pokemon 1",pokemon1)
console.log("Cópa Pokemon 1",copiaPokemon1)