/*# Exercício 1

Crie um array vazio chamado `sacolao`, e siga os passos abaixo:*/

const sacolao = [] 

/*a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;

```*/
const frutas1 = {
    nome: "Maça",
    preco: 1.99,
    disponibilidade: true}

    const frutas2 = {nome: "Morango",
    preco: 2.99,
    disponibilidade: false}

    const frutas3 = { nome: "Caqui", 
    preco: 3.99,
    disponibilidade: true }

    
/*b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`***/

sacolao.push(frutas1,frutas2,frutas3)


/*
c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos***/

console.log (sacolao)

