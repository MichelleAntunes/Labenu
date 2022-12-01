/*const idade = +(prompt("Qual a sua idade?"))

if (idade >=13 && idade <=17){
    console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
}
    else {("Consulte outras possibilidade do Labank")
}
// usando operador logico

console.log("Resposta: "+(idade==13?"A idade do dependente é 13 e ja pode ter um cartão":"Verifique as opções possíveis")) 
// it ternário*/


/*let opcoesRamal = +(prompt (`Escolha 
1 - Fácil
2 - Black
3 - Platinum
4 - Master Gold`))

switch (opcoesRamal){
    case 1:
      cartao =  console.log(`Fácil`)
    break
    case 2:
       cartao =  console.log(`Black`)
    break
    case 3:
    cartao = console.log(`Platinum`)
    break
    case 4:
        cartao = console.log(`Master Gold`)
    break
    default: 
    console.log("Escolha uma das quatro opções disponíveis")
    break
      
}*/



// PARA GUARDAR NA CABEÇA

const numeroAleatorio = +(prompt("Acerte o número entre 6 e 30"))

if (numeroAleatorio%2===0 && numeroAleatorio%3===0){
    console.log("Este número é divisivel por 2 e por 3")
              switch (numeroAleatorio){
        case 6:
        console.log ("Você escolheu número 6, ainda não é esse!")
        break
        case 12:
        console.log("Você escolheu número 12, ainda não é esse!")
        break
        case 18:
        console.log("Você escolheu número 18, ainda não é esse!")
        break
        case 24:
        console.log("Você escolheu número 24, ainda não é esse!")
        break
        case 30: 
        console.log("UFA ACERTEI!")
        break
        default:
            console.log("O número é maior que 30 ou menor que 6")
        break
    }} else if (numeroAleatorio%2===0){
        console.log("Este número é divisivel por 2")
   } else if (numeroAleatorio%3===0){
    console.log("Este número é divisível por 3")
   } else {
    console.log("Número inválido ou não é divisível nem por e nem por 3")}


    //if (numeroAleatorio===30){
    //console.log(`Número é 30? `+ (numeroAleatorio? `UFA ACERTEI! `: `não foi dessa vez`))

   /* 
    /*numeroAleatorio===30?console.log("UFA ACERTEI!"):console.log("Valor errado")}
    else {
        console.log("Não acertou")*/