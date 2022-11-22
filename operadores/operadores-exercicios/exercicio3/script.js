/*console.log ("Parte 1")

const operacao1 = (5 > 20 && 5 < 2)
console.log ("5 é maior que 20 e também é menor que 2", operacao1)

const operacao2 = (5 == 5 || 5 == "5")
console.log ("5 é igual a 5 ou é igual a “5”", operacao2)

const operacao3 = !(20 > 50)
console.log ("negação de (vinte é maior que cinquenta)", operacao3)

const operacao4 = !(20 > 50 || 50 > 60)
console.log ("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", operacao4)*/

console.log ("Parte 2")

/* **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. 
Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.** */

const salario = 2000

const creche = 45.50

console.log ("Salário de Fulano é R$"+salario, "Auxilio Creche mensal é R$"+creche, "por filho.")
 /*1) O salário fixo mais o auxílio creche*/

const salariofixo = salario + creche*2 
console.log ("O salário fixo mais o auxílio creche é R$"+salariofixo)

/*2) Quanto Fulano de Silva receberá de comissão em janeiro*/

const comissao01 = 5784.50*0.1

console.log ("Comissao Janeiro será R$"+comissao01)

/*Quanto Fulano de Silva será descontado em janeiro pelo INSS*/

const comissao02 = 3418.41*0.1
const comissao03 = 4124.1*0.1
const comissao04 = 1874.00*0.1
const comissao05 = 7000*0.1
const comissao06 = 9450*0.1

const salario01 = (comissao01 + salario)*0.95
const salario02 = (comissao02 + salario)*0.95
const salario03 = (comissao03 + salario)*0.95
const salario04 = (comissao04 + salario)*0.95
const salario05 = (comissao05 + salario)*0.95
const salario06 = (comissao06 + salario)*0.95


console.log ("Desconto INSS no mês de Janeiro será R$"+(salario01*0.05).toFixed(2))

/*Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.*/


const Janeiro =  (salario01 + (creche*2))
console.log ("Salario de Janeiro será R$", Janeiro.toFixed(2))

const Fevereiro = (salario02 +(creche*2))
console.log ("Salario de Fevereiro será R$", Fevereiro.toFixed(2))

const Marco = (salario03 + (creche*2))
console.log ("Salario de Março será R$", Marco.toFixed(2))

const Abril = (salario04 + (creche*2))
console.log ("Salario de Abril será R$", Abril.toFixed(2))

const Maio = (salario05 +(creche*2))
console.log ("Salario de Maio será R$", Maio.toFixed(2) )

const Junho = (salario06+ (creche*2))
console.log ("Salario de Junho será R$", Junho.toFixed(2))



 /*5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo,
 a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)*/

 const total = Number ((Janeiro+Fevereiro+Marco+Abril+Maio+Junho).toFixed(2))

console.log (("Somatoria de todos os meses será R$:"), total)

console.log (("Média de todos os meses será R$:"), (total/6).toFixed(2))
