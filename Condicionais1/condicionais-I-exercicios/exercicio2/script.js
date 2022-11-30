/*let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

if(){

}else{
	
}
/*# Exercício 2

Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.*/

/*let idade =  Number(prompt("Qual sua idade?"))
let terminouEnsM = confirm("Você terminou o Ensino médio?")
let isCursandoOutraFaculdade = confirm("Você está cursando alguma faculdade?")*///sSEM ESTAR DENTRO DE FUNCAO

function informacoes (valorIdade, booleanoEnsino, booleanoFaculdade){
    
    if (valorIdade >=18){
        console.log(`${nome}, é maior de idade`)
    }
    else if (valorIdade <18){
        console.log (`${nome}, é menor de idade`)
    }
        else console.log ( "Valor incorreto") //verificando primeiro valor idade

    if (booleanoEnsino){
        console.log(`${nome}, terminou o ensino médio`)
    }
    else 
    console.log(`${nome}, não terminou o ensino médio`) //verificando segundo valor ensino médio

    if (!booleanoFaculdade){
        console.log(`${nome}, não está cursando alguma faculdade no momento`)
    }
    else 
    console.log(`${nome}, está cursando uma faculdade no momento`) //verificando terceiro valor faculdade
}


const nome = prompt("Qual seu nome?")
const idade = Number (prompt("Qual sua idade?"))
const ensinoMedio = confirm("Você já terminou o ensino médio?")
const faculdade = confirm("Você está cursando alguma faculdade no momento?")
informacoes (idade,ensinoMedio,faculdade)


/*Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;*/

/*if (idade >=18){
    console.log("A pessoa tem 18 anos ou mais")}
    else {console.log ("A pessoa é menor de idade")
}

if (terminouEnsM ===true){
    console.log("A pessoa terminou o Ensino Médio")}
    else {console.log("A pessoa não terminou o Ensino Médio")
}


if (isCursandoOutraFaculdade ===false){
    console.log("A pessoa não está cursando alguma faculdade ")}
    else{console.log("A pessoa está cursando alguma faculdade")
}
/*Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.*/


/*<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >=18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details>
*/
