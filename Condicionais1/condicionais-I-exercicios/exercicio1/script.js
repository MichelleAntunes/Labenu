/*const num = //seu numero aqui

if(){
    console.log("sua mensagem aqui");
}

/*# Exercício 1

Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.
*/

/*const num = 10

if(num % 2 === 0){
    console.log("O número é par") // diferente de função
}*/

function constNumerica (numeroDigitado){
    if (numeroDigitado%2===0){
        console.log("Número par")
    }
    else if (numeroDigitado%2===1){
        console.log("Número ímpar")
    }
    else ("Número inválido")
}

const numero = prompt("Digite aqui um número para saber se é ímpar ou par")
constNumerica(numero)