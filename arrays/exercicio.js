/*
1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.*/

const notasAlunos = [5,8,9,10,0,3,7]

/*2. Depois disso, crie uma cópia deste array utilizando o método slice().
:*/
const notasFinais = notasAlunos.slice()

/*3. No array copiado *Remova o último item 
Em seguida adicione o número 6 no fim do   array.
Depois, remova o número que está no índice 2 array.
Por fim, imprima os dois arrays.*/

notasAlunos.pop() //removi o ultimo item
notasAlunos.push(6) // adicionei 6 no fim
notasAlunos.splice(2,1) // removi 1 elemento, a partir da posiçao 2
console.log (notasAlunos) //recebeu as alterações
console.log(notasFinais) //permaneceu igual 5,8,9,10

