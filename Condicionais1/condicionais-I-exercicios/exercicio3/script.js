 //= adicione o prompt aqui
/*# Exercício 3

Crie uma função que receba do usuário sua nacionalidade, utilize um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.*/
/*let nacionalidade = prompt("Escreva aqui sua nacionalidade")



/*Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;*/

/*const nacBrasileira = "brasileira"
const nacArgentina = "argentina"
const nacUruguai = "uruguaia"
const nacColombiana = "colombiana" 
// Criei essas variaveis para poder comparar nas respostas
/*

Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.*/

/*if (nacionalidade.toLowerCase()==nacBrasileira)
{console.log("Nacionalidade brasileira")}
else if (nacionalidade.toLowerCase() == nacArgentina) 
{console.log("Nacionalidade argentina")}
else if (nacionalidade.toLowerCase() == nacUruguai) {console.log ("Nacionalidade uruguaia")}
else if( nacionalidade.toLowerCase() == nacColombiana) {console.log ("Nacionalidade colombiana")}
else {console.log("Nacionalidade não aceita")}

/*> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 
*/
 function nacionalidade(deOndeVem) {

    if (deOndeVem ===("brasileira" || "uruguaia" || "argentina" || "chilena")){
        console.log(`Sua nacionalidade é: ${deOndeVem}`)
    }
    else ("Nacionalidade não cadastrada")
 }
 const resposta = prompt ("Qual a sua nacionalidade?")
 nacionalidade(resposta.toLowerCase())


 