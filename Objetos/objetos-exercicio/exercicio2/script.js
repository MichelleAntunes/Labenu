const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

/*# Exercício 2

Leia o código abaixo, e responda:

```jsx
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};
```*/
console.log (filme)
console.log ("Quantos atores há no filme?",filme.elenco.length)

/*a) Qual o código para imprimir o nome do **primeiro** ator/atriz?*/

console.log("Primeiro nome:",filme.elenco[0])

/*

b) Qual o código para imprimir o nome do **último** ator/atriz?*/

console.log("Ultimo nome:",filme.elenco[3])

/*c) Qual o código para exibir o array com **todas** as transmissões de hoje?*/

console.log("Horário de todas as transmissões:",filme.transmissoesHoje)

/*/
d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?*/

console.log ("Horário Canal Brasil:", filme.transmissoesHoje[1])
