const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

// escreva seu código abaixo 👇🏻

/*for (let i = 0; i < filmes.length; i++) {
  console.log(
    `${filmes[i].titulo} de ${filmes[i].ano}, dirigido por ${filmes[i].diretor} `
  );
  for (let j = 0; j < filmes[i].elenco.length; j++) {
    console.log(`Ator ${+j + 1}: ${filmes[i].elenco[j]}`);
  }
}*/ //usando somente for

/*for (let i in filmes) {
  console.log(
    `${filmes[i].titulo} de ${filmes[i].ano}, dirigido por ${filmes[i].diretor} `
  );
  for (let j = 0; j < filmes[i].elenco.length; j++) {
    console.log(`Ator ${+j + 1}: ${filmes[i].elenco[j]}`);
  }
}*/
// usando for in na primeira

/*for (let i in filmes) {
  console.log(
    `${filmes[i].titulo} de ${filmes[i].ano}, dirigido por ${filmes[i].diretor} `
  );
  for (let j of filmes[i].elenco) {
    console.log(`Ator ${+filmes[i].elenco.indexOf(j) + 1}: ${j}`);
  }
}*/

for (let i in filmes) {
  console.log(
    `${filmes[i].titulo} de ${filmes[i].ano}, dirigido por ${filmes[i].diretor} `
  );
  for ([indexe, value] of filmes[i].elenco.entries()) {
    console.log(`Ator ${indexe + 1}: ${value}`);
  }
}
