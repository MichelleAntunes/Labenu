  /* Declare uma função que:
Receba um nome, um ano de nascimento e o ano  Atual 
Retorne uma string com um boleano true para se o usuário for maior de idade e false para se for menor de idade. 
A string retornada deve ter a seguinte mensagem:
“Fulano é maior de idade? true”
Chame a função duas vezes, passando como argumento nomes e anos de nascimento diferentes.*/


function pratica4 (nomeF,anoNascimento, anoAtual) {
    const idade = (anoAtual - anoNascimento >= 18)
    
   return `${nome} é maior de idade? ${idade}`
}

const nome = prompt("Qual seu nome?")
const anoNascimentoR = prompt("Qual ano que você nasceu?")
const anoAtualR = prompt("Qual ano atual?")

console.log(pratica4(nome,anoNascimentoR,anoAtualR))

