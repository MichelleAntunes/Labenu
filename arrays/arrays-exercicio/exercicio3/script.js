
/*# Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
*/

const primeiraArray = [51,20,104,320] 
const segundaArray = ["banana", "maça","uva", "morango","caqui"] 
const boleano = (20===0)
const terceiraArray = [29,"Michelle", boleano]

const primeiraArrayCopia = primeiraArray
const segundaArrayCopia = segundaArray
const terceiraArrayCopia = terceiraArray

/*

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;*/

console.log ("Primeira array original", primeiraArray)
primeiraArray.unshift(22)
console.log ("Primeira array com um novo número no inicio", primeiraArray)
/*
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
*/
console.log ("Segunda Array original é", segundaArray)
segundaArray.pop()
console.log("Segunda Array sem o ultimo item", segundaArray)

/*
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
*/
console.log("Terceira Array original é:",terceiraArray)
terceiraArray.splice(1,1)
console.log("Terceira Array sem o segundo item é",terceiraArray)