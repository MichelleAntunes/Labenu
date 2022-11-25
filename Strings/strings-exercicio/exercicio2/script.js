
/*Observe a string abaixo.

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;*/
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log ("Quantidade de caracteres da string antes da remoção dos espaços:", minhaString.length)

//const minhaString2 = minhaString.trim()

/*b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;*/


const minhaString2 = minhaString.trim() //removendo espaços

console.log ("Quantidade de caracteres da string antes da remoção dos espaços:", minhaString2.length)

/*c) Substitua os traços `________` por “sticioso”.*/

const novaString = minhaString2.replaceAll("________", "sticioso")
console.log (novaString)