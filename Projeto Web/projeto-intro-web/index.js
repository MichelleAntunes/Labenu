
// meu item será vendas de ´coisas´novas e usadas online

const nomeVendedor1 = prompt ("Digite seu nome completo")
const paisVendedor1 = prompt ("Qual pais você mora?")
const dadosVendedor1 = (`Nome vendedor: ${nomeVendedor1}
Este vendedor envia o produto do pais: ${paisVendedor1}`)
const devolucaoSim = confirm ("Você aceita devolução?Se sim, clique em OK. Caso contrário, clique em CANCELAR")
const titulo1 = prompt("Descreva aqui apenas o titulo do seu anúncio") //tipo string
const resumo1 = prompt("Descreva aqui caracteristicas importantes do seu produto") //tipo string
const valor1 = Number(prompt("Preencha o valor do seu produto"))//tipo number
const novoUsado1 = confirm ("Se seu produto for novo, clique em OK. Se for usado clique em CANCELAR.")
const estadoItem1 = novoUsado1 //true para novo, false para usado
const vendaDoacao1 = confirm("Seu produto é para venda?Se sim, clique em OK. Caso contrário, clique em CANCELAR") //dados do primeiro item do primeiro vendedor



const nomeVendedor2 = prompt ("Digite seu nome completo")
const cidadeVendedor2 = prompt ("Qual pais você mora?")
const dadosVendedor2 = (`Nome vendedor: ${nomeVendedor1}
Este vendedor envia o produto do pais: ${paisVendedor1}`)
const devolucaoSim2= confirm ("Você aceita devolução?Se sim, clique em OK. Caso contrário, clique em CANCELAR")
const titulo2 = prompt("Descreva aqui apenas o titulo do seu anúncio") //tipo string
const resumo2 = prompt("Descreva aqui caracteristicas importantes do seu produto") //tipo string
const valor2 = Number(prompt("Preencha o valor do seu produto"))//tipo number
const novoUsado2 = confirm ("Se seu produto for novo, clique em OK. Se for usado clique em CANCELAR.")
const estadoItem2 = novoUsado1 //true para novo, false para usado
const vendaDoacao2 = confirm("Seu produto é para venda?Se sim, clique em OK. Caso contrário, clique em CANCELAR")

const nomeVendedor3 = prompt ("Digite seu nome completo")
const cidadeVendedor3 = prompt ("Qual pais você mora?")
const dadosVendedor3 = (`Nome vendedor: ${nomeVendedor3}
Este vendedor envia o produto do pais: ${paisVendedor1}`)
const devolucaoSim3 = confirm ("Você aceita devolução?Se sim, clique em OK. Caso contrário, clique em CANCELAR")
const titulo3 = prompt("Descreva aqui apenas o titulo do seu anúncio") //tipo string
const resumo3 = prompt("Descreva aqui caracteristicas importantes do seu produto") //tipo string
const valor3 = Number(prompt("Preencha o valor do seu produto"))//tipo number
const novoUsado3 = confirm ("Se seu produto for novo, clique em OK. Se for usado clique em CANCELAR.")
const estadoItem3 = novoUsado1 //true para novo, false para usado
const vendaDoacao3 = confirm("Seu produto é para venda?Se sim, clique em OK. Caso contrário, clique em CANCELAR")

  function descricaoItem(titulo, dados, resumo, vendaDoacao,novoUsado,valor, devolucao){
  
    return console.log (`${titulo.toLocaleUpperCase()}
    Nome do Vendedor: ${dados}
    Descrição do item: ${resumo}
    Este item é venda? ${vendaDoacao}
    O produto é novo? ${novoUsado}
    Qual o valor deste item? R$ ${valor}
    Este vendedor, aceita devolução deste item: ${devolucao}
     ` ) //templates para respeitar o enter
  }

descricaoItem (titulo1,dadosVendedor1, resumo1,vendaDoacao1,novoUsado1,valor1,devolucaoSim)

descricaoItem (titulo2, dadosVendedor2, resumo2,vendaDoacao2,novoUsado2,valor2,devolucaoSim2)

descricaoItem (titulo3, dadosVendedor3, resumo3,vendaDoacao3,novoUsado3,valor3,devolucaoSim3)

const mediaValores = (valor1+valor2+valor3)/3
console.log("Média de valores dos itens é:", mediaValores)

const verificaVenda = vendaDoacao1 && vendaDoacao2 && vendaDoacao3
const verificaNovo = novoUsado1&&novoUsado2&&novoUsado3
const verificaDevoluca = devolucaoSim&&devolucaoSim2&&devolucaoSim3
console.log ("Todos os itens são novos?",verificaNovo)
console.log("Todos os intens são venda?",verificaVenda)
console.log("Todos os itens podem ser devolvidos?", verificaDevoluca)


/*const resumoAnuncios = [`(
Dados do primeiro vendedor ${dadosVendedor1} 
Dados segundo vendedor ${dadosVendedor2}
Dados terceiro vendedor ${dadosVendedor3})`]
console.log ("Resumo deste anúncio:", resumoAnuncios) //imprimindo uma array
console.log [dadosVendedor1, dadosVendedor2, dadosVendedor3]
*/