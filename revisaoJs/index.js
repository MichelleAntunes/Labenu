console.log("Revisao JS Variaveis");
const nomeDoProduto = prompt("Digite o nome do seu produto");
let precoDoProduto = +prompt("Preço do produto");
precoDoProduto = precoDoProduto - 1;
console.log(`O preco do ${nomeDoProduto} é R$ ${precoDoProduto}`);

console.log("Revisao JS Artméticos");

const num1 = +prompt("Insira o primeiro número");
const num2 = +prompt("Insira o primeiro número");

console.log(`A soma do ${num1} com o ${num2} é de ${num1 + num2}`);
console.log(`A subtração do ${num1} com o ${num2} é de ${num1 - num2}`);
console.log(`A multiplicação do ${num1} com o ${num2} é de ${num1 * num2}`);
console.log(`A divisão do ${num1} com o ${num2} é de ${num1 / num2}`);
console.log(`O resto do ${num1} com o ${num2} é de ${num1 % num2}`);

console.log("Revisao JS Comparadores");

const numeroSorteado = Math.floor(Math.random() * 10) + 1; //sortear numero aleatorio. * 10 e +1 para ser de 1 até 10. Sem o +1 seria de 0 até 10
const numeroRecebido = +prompt("Insira um número");

if (numeroSorteado === numeroRecebido) {
  console.log(
    `O numero sorteado ${numeroSorteado} é exatamente igual ao número recebido ${numeroRecebido}`
  );
} else if (numeroSorteado > numeroRecebido) {
  console.log(
    `O numero sorteado ${numeroSorteado} é menor que número recebido ${numeroRecebido}`
  );
} else {
  console.log(
    `O numero sorteado ${numeroSorteado} é menor que número recebido ${numeroRecebido}`
  );
}

console.log("Revisao JS Operadores Lógicos");

const idadeDaPessoa = +prompt("Insira a sua idade");
const alturaDaPessoa = +prompt("Insira a sua altura em cm");
const temProblemaCardiaco = confirm(
  "Voce tem problemas cardiacos? Se sim, clique em OK. Se Não, clique em cancelar"
);

console.log(
  `O usuário possui ${idadeDaPessoa} anos, mede ${alturaDaPessoa}cm e a informação se tem problema cardiaco é: ${temProblemaCardiaco}`
);

if (
  idadeDaPessoa >= 18 &&
  alturaDaPessoa >= 160 &&
  temProblemaCardiaco === false
) {
  console.log("Acesso autorizado");
} else if (
  idadeDaPessoa < 18 &&
  alturaDaPessoa >= 160 &&
  temProblemaCardiaco === false
) {
  console.log("Idade minima permitida é 18");
} else if (
  idadeDaPessoa >= 18 &&
  alturaDaPessoa < 160 &&
  temProblemaCardiaco === false
) {
  console.log("Altura minima permitida é 160cm");
} else if (
  idadeDaPessoa >= 18 &&
  alturaDaPessoa >= 160 &&
  temProblemaCardiaco === true
) {
  console.log("Não é autorizado pessoas com problemas cardiacos");
} else if (
  idadeDaPessoa >= 18 &&
  alturaDaPessoa < 160 &&
  temProblemaCardiaco === false
) {
  console.log("Altura minima permitida é 160cm");
} else {
  console.log(
    "Você não cumpriu nenhum dos requisitos para entrar no brinquedo"
  );
}

console.log("Revisao JS Strings");

const frase = " Hoje eu vou comer cenoura, ebaaa ";

console.log(`A frase ${frase} possui ${frase.length} caracteres`);

console.log(`A frase ${frase.trim()} possui ${frase.length} caracteres`);

console.log(`A frase somente em letras minusculas é: ${frase.toLowerCase()} `);

console.log(
  `Essa frase tem a palavra comer? Resposta: ${frase.includes("comer")} `
);
console.log(
  `Essa frase tem a palavra batata? Resposta: ${frase.includes("batata")} `
);

const novaFrase = frase.replaceAll("cenoura", "batata");
console.log(`A nova frase é: ${novaFrase}`);
console.log(
  `Essa frase tem a palavra comer? Resposta: ${novaFrase.includes("comer")} `
);
console.log(
  `Essa frase tem a palavra batata? Resposta: ${novaFrase.includes("batata")} `
);

console.log("Revisao JS Arrays");

const listaDeCompras = ["batata", "cenoura", "beterraba"];
console.log(`Meu primeiro item da lista de compras é: ${listaDeCompras[1]}`);
console.log(`Tamanho da lista é: ${listaDeCompras.length}`);

listaDeCompras.push("Mandioca");
console.log(`Minha lista com alteração é: ${listaDeCompras}`);

console.log(`Tem cenoura na lista? ${listaDeCompras.includes("cenoura")}`);

console.log(`Tem morango na lista? ${listaDeCompras.includes("morando")}`);

listaDeCompras.splice(1, 1); // deleta a quantidade do segundo numero a partir do primeiro numero
console.log(`Nova lista sem o indice 1: ${listaDeCompras}`);

console.log("Revisao JS Funções");

const array = [6, 7, 8, 9, 10];
// tres sintaxes diferentes para fazer funções:
function divideDois1(arrayDeNumero) {
  const primeiro = arrayDeNumero[0] / 2;
  const ultimo = arrayDeNumero[arrayDeNumero.length - 1] / 2;

  arrayDeNumero[0] = primeiro;
  arrayDeNumero[arrayDeNumero.length - 1] = ultimo;
  return arrayDeNumero;
}

let divide2 = function (arrayDeNumero) {
  const primeiro = arrayDeNumero[0] / 2;
  const ultimo = arrayDeNumero[arrayDeNumero.length - 1] / 2;

  arrayDeNumero[0] = primeiro;
  arrayDeNumero[arrayDeNumero.length - 1] = ultimo;
  return arrayDeNumero;
};

let divide3 = (arrayDeNumero) => {
  const primeiro = arrayDeNumero[0] / 2;
  const ultimo = arrayDeNumero[arrayDeNumero.length - 1] / 2;

  arrayDeNumero[0] = primeiro;
  arrayDeNumero[arrayDeNumero.length - 1] = ultimo;
  return arrayDeNumero;
};
console.log(divideDois1(array));
console.log(divide2(array));
console.log(divide3(array));

console.log("Revisao JS Objetos");

const pessoa = {
  nome: "michelle",
  idade: 29,
  generoMusical: "pop",
};
console.log(
  `O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} e gosta muito de ${pessoa.generoMusical}.`
);

const novaPessoa = {
  ...pessoa,
  nome: "Sabrina",
};

console.log(
  `O nome da nova pessoa é ${novaPessoa.nome}, ela tem ${novaPessoa.idade} e gosta muito de ${novaPessoa.generoMusical}.`
);

console.log("Revisao JS Condicionais");

const numero = +prompt(`Insira um número para verificar a sua paridade`);

if (numero % 2 === 0) {
  console.log(`Cai no if: Este número é par`);
} else {
  console.log(`Cai no else: Este número é impar`);
}

const nomeBicho = prompt(`Escolha um animal`);

if (nomeBicho === "cachorro") {
  console.log(`AuAu`);
} else if (nomeBicho === `gato`) {
  console.log(`Miau`);
} else if (nomeBicho === `vaca`) {
  console.log(`Muu`);
} else {
  console.log(`sem barulho reconhecido`);
}

switch (nomeBicho) {
  case `cachorro`:
    console.log(`AuAu`);
    break;
  case `gato`:
    console.log(`Miau`);
    break;
  case `vaca`:
    console.log(`Muu`);
    break;
  default:
    console.log(`sem barulho reconhecido`);
    break;
}

console.log("Revisao JS Laços");

const numeros = [11, 15, 18, 14, 12, 13];
let maior = -Infinity;

let i = 0;
while (i < numeros.length) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  i++;
}
console.log(`O número maior é ${maior}`);

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}
console.log(`O número maior é ${maior}`);

for (let elemento of numeros) {
  if (elemento > maior) {
    maior = elemento;
  }
}
console.log(`O número maior é ${maior}`);

const prof = {
  nome: "Leticia Chijo",
  idade: 27,
  aulasFront: true,
  aulasBack: false,
  jogosFavoritos: [`Chrono Trigger`, `Undertale`, `Hollow Knight`],
  contaPiada: () => console.log("É pave ou pacume?"),
  pet: {
    nome: "Polly",
    especie: "cachorrinha",
    raca: "Lhasa Apso",
    snacksFavoritos: [`biscoitinho`, `maça`, `frango`],
  },
};

const verificaAula = (aula) => {
  if (aula) {
    return `Dou`;
  } else {
    return `Não dou`;
  }
};

let aulasBack = verificaAula(prof.aulasBack);
let aulasFront = verificaAula(prof.aulasFront);
const jogos = [];
for (let i = 0; i < prof.jogosFavoritos.length; i++) {
  jogos.push(`${i + 1} ${prof.jogosFavoritos[i]}`);
}

const frase2 = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos. 
${aulasFront} aulas de  front e ${aulasBack} aulas de back.
Meus jogos favoritos são: 
${jogos}
Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]} `;

console.log(frase2);
prof.contaPiada();

console.log("Revisao JS map e filter");

const produtos = [
  {
    nome: "Alface Lavada",
    categoria: "Hortifruti",
    preco: 2.5,
  },
  {
    nome: "Guaraná 2L",
    categoria: "Bebidas",
    preco: 7.8,
  },
  {
    nome: "Veja Multiuso",
    categoria: "Limpeza",
    preco: 12.6,
  },
  {
    nome: "Dúzia de Banana",
    categoria: "Hortifruti",
    preco: 5.7,
  },
  {
    nome: "Leite",
    categoria: "Bebidas",
    preco: 2.99,
  },
  {
    nome: "Cândida",
    categoria: "Limpeza",
    preco: 3.3,
  },
  {
    nome: "Detergente Ypê",
    categoria: "Limpeza",
    preco: 2.2,
  },
  {
    nome: "Vinho Tinto",
    categoria: "Bebidas",
    preco: 55,
  },
  {
    nome: "Beringela Kg",
    categoria: "Hortifruti",
    preco: 8.99,
  },
  {
    nome: "Sabão em pó",
    categoria: "Limpeza",
    preco: 10.8,
  },
];
console.log(produtos);

const produtosDesconto = produtos.map((produtos) => {
  return {
    ...produtos,
    preco: (produtos.preco * 0.9).toFixed(2),
  };
});

console.log(produtosDesconto);

const produtosHorti = produtos.filter((produtos) => {
  return produtos.categoria === "Hortifruti";
});
console.log(produtosHorti);

const produtosHortiDesconto = produtosHorti.map((produtos) => {
  return { ...produtos, preco: (produtos.preco * 0.9).toFixed(2) };
});
console.log(produtosHortiDesconto);

//fazendo as duas juntas
const produtosHorti2 = produtos
  .filter((produtos) => {
    return produtos.categoria === "Hortifruti";
  })
  .map((produtos) => {
    return { ...produtos, preco: (produtos.preco * 0.9).toFixed(2) };
  });

console.log(produtosHorti2);
