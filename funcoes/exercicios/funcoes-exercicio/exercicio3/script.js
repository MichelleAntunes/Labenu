/*
a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).*/

function primeira(numero1, numero2){
    const variavelPrimeira = (numero1+numero2)

    return `O primeiro número é ${numero1}, o segundo número é ${numero2}. Então, a soma dos dois totaliza: ${variavelPrimeira} `
}
console.log(primeira(14,9))

function segunda(numero1, numero2){
    return `O primeiro número é ${numero1}, o segundo número é ${numero2}. Então, a subtração entre eles é: ${numero1-numero2} ` 
}

    console.log(segunda(5,46))

function terceira(numero1, numero2){
    return `O primeiro número é ${numero1}, o segundo número é ${numero2}. Então, a multiplicação entre eles é: ${numero1*numero2} ` 
}
    console.log(terceira(21,3))

function quarta(numero1, numero2){
    return `O primeiro número é ${numero1}, o segundo número é ${numero2}. Então, a divisão entre eles é: ${numero1/numero2} ` 
}
    console.log(quarta(48,6))

/*b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.*/

const variavel1 = +(prompt ("Escolha um número"))
const variavel2 = +(prompt ("Escolha um número"))

/*c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.*/

console.log ("Invocando com as variaveis:")

console.log(primeira(variavel1, variavel2))
console.log(segunda(variavel1, variavel2))
console.log(terceira(variavel1, variavel2))
console.log(quarta(variavel1, variavel2))

/*d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.*/

