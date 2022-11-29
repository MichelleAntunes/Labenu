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

console.log ("Prmeira Frase:", minhaFrase)
console.log ("Segunda frase:", novaFrase)
console.log ("Nova frase inclui a palavra \"verde\"?:", novaFrase.includes("verde"))
console.log ("Nova frase inclui a palavra \"laranja\"?:", novaFrase.includes("laranja"))


/***EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”*/

const fraseFinal = novaFrase.replaceAll("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log ("Frase com um trecho todo maiúsculo:",fraseFinal)

//const sentenca = novaFrase.split("mas não deixe o gato sair")

//console.log (novaFrase + sentencaUp)


