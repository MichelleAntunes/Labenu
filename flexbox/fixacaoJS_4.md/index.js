const arrayDeNumeros = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5];
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let novoArray = [];
  if (arrayDeNumeros.includes(numeroEscolhido)) {
    for (let elemento of arrayDeNumeros) {
      if (elemento === numeroEscolhido) {
        novoArray.push(numeroEscolhido);
      }
    }
    return `O número ${numeroEscolhido} aparece ${novoArray.length}x`;
  } else {
    return `Número não encontrado`;
  }
}
console.log(contaOcorrencias(arrayDeNumeros, 4));

//USANDO FOR IN DEVE MUDAR A FORMA DE LOCALIZAR O ELEMENTO

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let novoArray = [];
  if (arrayDeNumeros.includes(numeroEscolhido)) {
    for (let elemento in arrayDeNumeros) {
      if (arrayDeNumeros[elemento] === numeroEscolhido) {
        novoArray.push(numeroEscolhido);
      }
    }
    return `O número ${numeroEscolhido} aparece ${novoArray.length}x`;
  } else {
    return `Número não encontrado`;
  }
}
console.log(contaOcorrencias(arrayDeNumeros, 4));
