/*let boleano1 = false
let boleano2 = true
let boleano3 = true

if(boleano1){
    alert ("Booleano 1 é verdadeiro")} 
    else{alert("Booleano 1 é falso")}

// resultado foi Alert 2, pois a primeira condicional nao foi aplicada pelo if, ja que seu valor é false.

if(boleano1===boleano2){alert ("Boleano 1 e 2 são iguais")} 
    else if(boleano2===boleano3){console.log("Boleano 2 e 3 sao iguais")} 
        else if(boleano1===boleano3) {console.log("Boleanos 1 e 3 são iguais")} 
        else if (boleano1!==boleano2!==boleano3){console.log("Todos são diferentes")}*/


/*let idade = Number(prompt("Qual a sua idade?"))

if (idade>=18 && idade<60){console.log("Obrigatorio")} 
    else if (idade>=60 ) {console.log("Casos facultativos")}
    else if(idade >=16 && idade <18 ){console.log("Casos facultativos")}
    else if (idade<16) {console.log("Não pode emitir")} 
    else {alert("Idade inválida")}*/



    //PARA GUARDAR - 1. Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10; Crie um if que verifica se o valor é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada. Adicione um else que imprime que a pessoa foi reprovada se a condição não foi atendida.*/

    let media = Number(prompt("Qual a sua média"))
if (media >=5 && media<=10 ) {
    console.log("A pessoa foi aprovada")
}
else if (media >=3 && media<5) {
    console.log("Recuperação")
}
else  if (media<3) {
    console.log("A pessoa foi reprovada")
}
else if (media>10){
    console.log("Nota inválida")
}
else {
    console.log("Dados inválidos")
} 