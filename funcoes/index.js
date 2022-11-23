/*function pratica1Normal () {

}

function pratica1Arrow = () => {

}
dois tipos de mandar function
*/



function pratica1Normal(nome) {
    console.log(`Olá, ${nome}`)
}

const pratica1Arrow = (nome) => {
console.log (`Olá, ${nome}`)

}


pratica1Normal("Joao")
pratica1Arrow("bananinha")

function recebaNome (nome){
 console.log (`Olá, ${nome}`)

}

recebaNome (`Michelle`)
recebaNome (`Ciclano`)
recebaNome (`Fulano`)

recebaNome () //undefined
recebaNome ()//undefined
recebaNome ()//undefined

const recebaNomeArrow = (nome) => {
console.log (`Olá, ${nome}`)

}

recebaNomeArrow (`nome2`)
recebaNomeArrow (`nome3`)
recebaNomeArrow (`nome4`)

recebaNomeArrow () //undefined
recebaNomeArrow ()//undefined
recebaNomeArrow ()//undefined


