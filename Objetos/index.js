const estudante = {
    nome:`Michelle`, //string
    sobrenome: `Antunes`, //string
    numeroMatricula: 1234,//number
    notasSemestre: [10,10,10]//array - number

    }

estudante.modulo = `Primeiro módulo` //adicionando informacoes

console.log ("Nome do Estudante:",estudante.nome)

console.log ("Segunda nota do estudante:",estudante.notasSemestre[1])

console.log("Modulo do estudante:",estudante.modulo)
////////

const copiaEstudante = {
    ...estudante,
    nome: `Astrodev`,
    notasSemestre: [...estudante.notasSemestre, 9],
    modulo: `Segundo módulo`

}
console.log(estudante)
console.log(copiaEstudante) // imprimindo a cópia

const estudantesLabenu = [estudante, copiaEstudante]
console.log(estudantesLabenu)
