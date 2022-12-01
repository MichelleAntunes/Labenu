console.log("teste 1");
/*# Exercício 1

Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
Faça isso:
    
1. Utilizando ifs aninhados
```jsx
    if(expressao){
        if(expressao){

        }
    }
```
2. Utilizando um operador lógico para unir duas operações relacionais
```jsx
    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
    
    }
```*/
const numeroAleatorio = +prompt("Digite um número");

if (numeroAleatorio % 2 === 0) {
  if (numeroAleatorio % 3 === 0) {
    console.log("Este número é divisível por 2 e por 3 ");
  } else {
    console.log("Este número é divisível por 2");
  }
} else if (numeroAleatorio % 3 === 0) {
  console.log("Este número é divisível por 3");
} else {
  console.log("Este número não é divisível nem por 2 e nem por 3");
}

//aninhados

if (numeroAleatorio % 2 === 0 || numeroAleatorio % 3 === 0) {
  console.log("Este número é divisível por 2 ou por 3");
} else {
  console.log("Número inválido");
}
