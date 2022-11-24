
/*# Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details>*/

  const nome = prompt("Digite seu nome")
  const Comida1 = prompt("Digite seu top1 em Comidas Favoritas")
  const Comida2 = prompt("Digite seu top2 em Comidas Favoritas")
  const Comida3 = prompt("Digite seu top3 em Comidas Favoritas")

  console.log (`Estas sao as comidas favoritas de: ${nome} 
  ${Comida1}
  ${Comida2}
  ${Comida3}`)
// utilizei template strings para envolver minha string com minhas varias e assim aceitar a quebra de linha com o enter

