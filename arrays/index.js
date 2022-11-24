/*Vamos tentar acessar índices específicos dos arrays da última prática.
Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
Verifique se o terceiro array inclui cada um dos itens;
No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho.*/

const nomesAlunos = ["Michelle", "Bruno", "Natalia"]
console.log (nomesAlunos)
console.table(nomesAlunos) // tipo string

const notasAlunos = [10,8,5]
console.table (notasAlunos) //tipo number

const copa = ("Copa do Mundo")
const variados = [copa, 6, true]
console.log (variados) //array com tipos variados

const melhorNota = [10] // array com apenas um valor
console.log (melhorNota)

const vazio = []//array vazio
console.log (vazio)

console.log (nomesAlunos[3]) // imprimi undefined pois nao tem

console.log (nomesAlunos[2]) // imprimi natalia

console.log (variados.includes("Copa do Mundo"))

console.log (variados.includes(true))

console.log(melhorNota[0])
console.log(melhorNota.indexOf(10))
console.log(notasAlunos.indexOf(10)) //retorna a posicao
console.log(notasAlunos.indexOf(50)) //retorna -1 pois nao existe

console.log (melhorNota.length)

/*Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.*/
const nomesAlunosCopia = melhorNota
console.log ("array de strings", melhorNota)
console.log ("array de cópia", nomesAlunosCopia)

/*Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos ajustar?*/

nomesAlunosCopia.push("Labenu")
console.log(nomesAlunosCopia)
console.log (melhorNota)

const copiaCorreta = nomesAlunosCopia.slice()
copiaCorreta.push ("Labenu")
console.log (copiaCorreta)

console.log (melhorNota)


/*Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.*/

copiaCorreta.splice(1,2)
console.log (copiaCorreta,)
// 




