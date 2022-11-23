
const pratica3 = (login, senha) => {
    const loginArmazenado = "admin@gmail.com"
    const senhaArmazenada = "bananinha"

    return login === loginArmazenado && 
           senha === senhaArmazenada
}

const loginDigitado = prompt ("Qual seu login?")
const senhaDigitada = prompt ("Qual a sua senha")
console.log (pratica3(loginDigitado, senhaDigitada))

function pratica3Function (login, senha) {
    const loginArmazenado = "admin@gmail.com"
    const senhaArmazenada = "bananinha"

    return login === loginArmazenado && 
           senha === senhaArmazenada

}

const loginDigitado2 = prompt ("Qual seu login?")
const senhaDigitada2 = prompt ("Qual a sua senha")
console.log (pratica3(loginDigitado2, senhaDigitada2))