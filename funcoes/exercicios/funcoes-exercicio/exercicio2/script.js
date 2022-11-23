/*# Exercício 2
Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.*/


function exercicio2(numero1, numero2){
    const soma = numero1+numero2
    return `Valor da soma é: ${soma}`
}

console.log (exercicio2(5,15))

/*b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.*/

function letraB (numero1, numero2) {
    const boleano = numero1>=numero2
    return `O primeiro número é ${numero1}
    O segundo número é ${numero2}
    
    A informação: o primeiro número é maior ou igual ao segundo, é: ${boleano}`
}

console.log (letraB(6,12))

/*c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.*/

function letraC (numero1){
    
    return `O número informado é par? ${numero1===0}`
}

console.log(letraC(21))

/*d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  */

function letraD (valorSalario){
    
    return `Seu salário completo é de R$: ${valorSalario} 
    O seu salário menos o desconto de 10% de INSS é de R$: ${valorSalario*0.90} e o valor apenas do INSS é R$ ${valorSalario*0.10}`
}

console.log (letraD(950))

