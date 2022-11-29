let boleano1 = false
let boleano2 = true
let boleano3 = true

if(boleano1){
    console.log ("Alert")} 
    else{console.log("Alert 2")}

// resultado foi Alert 2, pois a primeira condicional nao foi aplicada pelo if, ja que seu valor é false.

if(boleano1===boleano2){console.log ("Boleano 1 e 2 são iguais")} 
    else if(boleano2===boleano3){console.log("Boleano 2 e 3 sao iguais")} 
        else if(boleano1===boleano3) {console.log("Boleanos 1 e 3 são iguais")} else if (boleano1!==boleano2!==boleano3){console.log("Todos são diferentes")}


let idade = Number(prompt("Qual a sua idade?"))

if (idade>=18){console.log("Pode emitir o título de eleitor")} 
    else if(idade >=60||idade===16 || idade ===17 ){console.log("Casos facultativos")}
    else {console.log("Não pode emitir o título de eleitor")}

    //PARA GUARDAR
    /*let media = 6
if (media >=5) {console.log("A pessoa foi aprovada")}
else if (media >=3) {console.log("Recuperação")}
else  if (media<3) {console.log("A pessoa foi reprovada")}
else {console.log("Dados inválido")} // nao entendi*/