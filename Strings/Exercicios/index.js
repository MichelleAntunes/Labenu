const nome = prompt("Qual a seu nome?")
const cor = prompt("Qual a sua cor favorita?")
nome.toUpperCase()

console.log ("A cor favorita de"+nome+"é"+cor )
 //concatenação
console.log (`A cor favorita de  ${nome} é ${cor}`)
//template strings

const citacao = prompt ("Qual sua citação favorita?")
console.log ("\""+ citacao+"\"")
//resposta entre aspas

console.log (`Nome: ${nome}
Cor favorita: ${cor}`)
//template strings com quebra de linha

console.log (nome.toUpperCase())
//tudo letra maiscula 

console.log (nome.length)
// quantidade de caracteres

console.log (nome.includes("A"))
//demonstra se no meu nome possui a letra A

