const idade = Number(prompt("Qual a sua idade?"))
if (idade >=13 && idade <=17){
    console.log("Seu dependente já pode ter um cartão vinculado ao seu")
}else{
    console.log("Consulte outras possibilidades do Labank")
}
// utilizando if aninhamento

if (idade===13)
{
    console.log(`A idade é:`+(idade===13?"13":`${idade}`))
}
