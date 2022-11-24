const nome = prompt ("Qual seu nome?")
const email = prompt ("Qual seu e-mail?")
console.log ("O e-mail do usuário", email, "foi cadastrado com sucesso. Boas Vindas,", nome, nome.length)

let frase = (`O e-mail do usuário" ${email} foi cadastrado com sucesso. Boas Vindas, ${nome}`)
frase = frase.toUpperCase()

console.log(frase.replaceAll(`R`, `X`))

console.log (`O e-mail digitado possui @?`, email.includes(`@`))

 