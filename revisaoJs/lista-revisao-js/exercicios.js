// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01 Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02 Escreva uma função que recebe um array como parâmetro e retorne este array invertido. desafio for
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03 Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. desafio for dentro de for
function retornaArrayOrdenado(array) {
  return array.sort(
    (itemAnterior, itemPosterior) => itemAnterior - itemPosterior
  );
}

// EXERCÍCIO 04 Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
function retornaNumerosPares(array) {
  const resultado = [];
  for (let numero of array) {
    if (numero % 2 === 0) {
      resultado.push(numero);
    }
  }
  return resultado;
}

//com filter
//return array.filter(numero => numero % 2 === 0)

// EXERCÍCIO 05 Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
function retornaNumerosParesElevadosADois(array) {
  const resultado = array.filter((numero) => {
    return numero % 2 === 0;
  });

  const resultadoFinal = resultado.map((numero) => {
    return numero * numero;
  });
  return resultadoFinal;
}

// EXERCÍCIO 06 Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
  const maiorNumero = array.reduce(function (maior, menor) {
    return maior > menor ? maior : menor;
  });
  return maiorNumero;
}

/*const arrayOrdenado = retornaArrayOrdenado(array);
  return arrayOrdenado[arrayOrdenado.length - 1];
*/

// EXERCÍCIO 07 Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades: -
/*`maiorNumero` → contém o maior número
- `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
- `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)*/

function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero1, maiorDivisivelPorMenor1, diferenca1;
  if (num1 > num2) {
    maiorNumero1 = num1;
    maiorDivisivelPorMenor1 = num1 % num2 === 0;
    diferenca1 = num1 - num2;
  } else {
    maiorNumero1 = num2;
    maiorDivisivelPorMenor1 = num2 % num1 === 0;
    diferenca1 = num2 - num1;
  }
  const objeto = {
    maiorNumero: maiorNumero1,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor1,
    diferenca: diferenca1,
  };
  return objeto;
}

// EXERCÍCIO 08 Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares
function retornaNPrimeirosPares(n) {
  const resultado = [];
  for (let i = 0; resultado.length < n; i = i + 2) {
    resultado.push(i);
  }
  return resultado;
}

// EXERCÍCIO 09 Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno (não é necessário validar se os lados fecham um triângulo).
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}
// EXERCÍCIO 10 Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original.
function retornaSegundoMaiorESegundoMenor(array) {
  const maior = retornaArrayOrdenado(array);
  return [maior[maior.length - 2], maior[1]];
}

// EXERCÍCIO 11 Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco. Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${chamadaFilme.nome}, de ${
    chamadaFilme.ano
  }, dirigido por ${
    chamadaFilme.diretor
  } e estrelado por ${chamadaFilme.atores.join(", ")}.`;
}

// EXERCÍCIO 12 Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e retorne um novo objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome.
function retornaPessoaAnonimizada(pessoa) {
  const propriedade = {
    ...pessoa,
    nome: "ANÔNIMO",
  };

  return propriedade;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = [];
  for (let elemento of pessoas) {
    if (elemento.idade > 14 && elemento.idade < 60 && elemento.altura > 1.5) {
      pessoasAutorizadas.push(elemento);
    }
  }
  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasAutorizadas = [];
  for (let elemento of pessoas) {
    if (elemento.idade <= 14 || elemento.idade > 60 || elemento.altura < 1.5) {
      pessoasAutorizadas.push(elemento);
    }
  }
  return pessoasAutorizadas;
}

// EXERCÍCIO 14 Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Exemplo:
function retornaContasComSaldoAtualizado(contas) {
  for (let conta of contas) {
    let totalCompras = 0;

    for (let compras of conta.compras) {
      totalCompras += compras;
    }
    conta.compras = [];
    conta.saldoTotal = conta.saldoTotal - totalCompras;
  }
  return contas;
}

// EXERCÍCIO 15A A sua tarefa é criar uma função que receba o **array** acima como parâmetro e retorne um **array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)**

function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => {
    x = a.nome;
    y = b.nome;
    return x == y ? 0 : x > y ? 1 : -1;
  });
}

// EXERCÍCIO 15B reverse().join()

function retornaArrayOrdenadoPorData(consultas) {
  return consultas.sort((a, b) => {
    x = new Date(a.dataDaConsulta.split("/").reverse()).getTime();
    y = new Date(b.dataDaConsulta.split("/").reverse()).getTime();
    return x - y;
  });
}
