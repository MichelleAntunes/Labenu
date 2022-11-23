/*# Exercício 1

a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

b) Declare uma função que receba um número como parâmetro imprima no console a 
tabuada do dele. Chame esta função várias vezes com números diferentes.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
*/

function exercicio1 (nome){
    

    return `Olá, ${respostaNome}`

}
const respostaNome = prompt (`Qual o seu nome?`)

console.log (exercicio1(respostaNome))

function tabuada (numero) {

    const resultado = [(numero*1),(numero*2),(numero*3),(numero*4),(numero*5),(numero*6),(numero*7),(numero*8),(numero*8),(numero*9),(numero*10)]

    return (`tabuada de ${numero} é:${resultado} `)
}

console.log (tabuada(2))
console.log (tabuada(3))
console.log (tabuada(4))
console.log (tabuada(5))
console.log (tabuada(6))
console.log (tabuada(7))
console.log (tabuada(8))
console.log (tabuada(9))
console.log (tabuada(10))