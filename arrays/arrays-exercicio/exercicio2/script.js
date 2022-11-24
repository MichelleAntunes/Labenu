/*# Exercício 2
Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:*/

const primeiraArray = [51,20,104,320] 
const segundaArray = ["banana", "maça","uva", "morango","caqui"] 
const boleano = (20===0)
const terceiraArray = [29,"Michelle", boleano]

/*- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);*/

console.log (`Quantidade de itens da primeira array ${primeiraArray.length}`)

console.log (`Quantidade de itens da segunda array ${segundaArray.length}`)

console.log (`Quantidade de itens da terceira array ${terceiraArray.length}`)


/*- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;*/

console.log ("Primeira posição, da primeira Array é:", primeiraArray[0])

console.log ("Segunda posição, da segunda Array é:", segundaArray[1])

console.log ("Terceira posição, da terceira Array é:", terceiraArray[1])


/*- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. */

console.log ("O número 104 está incluso na primeira array?",primeiraArray.includes(104))

console.log ("O número 104 está incluso na teceira array?",terceiraArray.includes(104))





//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";*/