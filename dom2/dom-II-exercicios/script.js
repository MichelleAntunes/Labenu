/*# Exercício 1
Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização.*/

//Funçao 1
// const novoItem = document.getElementById("container");
// const adicionaItem = (event) => {
//   //   const texto = document.createTextNode("Novo item");
//   const texto = document.createElement("h1");
//   texto.innerHTML = "Novo item";
//   novoItem.appendChild(texto);
// };

/*# Exercício 2
Altere a função criada no exercício 1 para que agora o clique no botão faça a **estilização** do novo item*/

const novoItem = document.getElementById("container");
const adicionaItem = (event) => {
  //   const texto = document.createTextNode("Novo item");
  const texto = document.createElement("h1");
  texto.innerHTML = "Novo item";
  texto.setAttribute("class", "item");
  novoItem.appendChild(texto);
};

/*# Exercício 3

Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. Esta função deve **remover** o elemento clicado.

**Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.*/

// const remover = document.getElementsByClassName("item");
// nao precisa criar essa const, a propriedade event.target irá acessar cada evento dito

const removeItem = (event) => {
  event.target.remove();
  //   novoItem.removeChild(event.target); outra forma de fazer a mesma coisa
};

// const novoItem = document.getElementById("container");
// const adicionaItem = (event) => {
//   //   const texto = document.createTextNode("Novo item");
//   const texto = document.createElement("h1");
//   texto.innerHTML = "Novo item";
//   texto.setAttribute("class", "item");
//   texto.setAttribute("onclick", "removeItem(event)");
//   novoItem.appendChild(texto);
// };
