/*# Exercício 3

A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”*/

/*
a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);*/ 

let minhaFrase = ("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"") //usando barra invertida para poder usar aspas dentro de aspas

/*b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;*/

const novaFrase = minhaFrase.replaceAll("verde","rosa").replaceAll("azul","laranja")

/*c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.*/

console.log ("Primeira frase:", minhaFrase)

console.log ("Segunda frase:", novaFrase)

/***EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”*/

//const sentenca = novaFrase.split("mas não deixe o gato sair")

//console.log (novaFrase + sentencaUp)


