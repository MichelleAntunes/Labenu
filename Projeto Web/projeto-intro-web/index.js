// meu item será cidades turisticas na Alemanha

let city = [
  {
    nameCity: `Weimar`.toUpperCase(),
    stade: "Turíngia",
    quantity: Number(`65.004`),
    capital: false,
    foundationYear: 1918,
    mainParty: "Zwiebelfest, Weimarer Weihnacht",
  },
  {
    nameCity: "Dresden".toUpperCase(),
    stade: "Saxônia",
    quantity: Number(`554.649`),
    capital: true,
    foundationYear: 1173,
    mainParty: "Striezelmarkt, Bunte Republik Neustadt",
  },
  {
    nameCity: "Nürnberg".toUpperCase(),
    stade: "Bavária",
    quantity: Number(`518.365`),
    capital: false,
    foundationYear: 1040,
    mainParty: " Nürnberg Christkindlesmarkt , Classic Open Air",
  },
];

city[0].touristAttraction = "Buchenwald Memorial";
city[1].touristAttraction = "The Dresden Zwinger";
city[2].touristAttraction = "Altstadt";

// imprimindo meu objeto
for (cities of city) {
  for (propriedade in cities) {
    console.log(`${propriedade}: ${cities[propriedade]}`);
  }
  console.log("----------------------");
}
// primiera função verificando um objeto
function verificarCapital(objetoCidade) {
  for (let cidade in city) {
    console.log(
      ` A cidade de ${city[cidade].nameCity}, pertence ao estado:  ${city[cidade].stade} `
    );
  }
}
verificarCapital(city);
// segunda função verificando um objeto e uma string
function verificarCidade(objetoCidade, nomeCidade) {
  let cidadeEncontrada = "";

  for (let cidade of objetoCidade) {
    if (cidade.nameCity === nomeCidade) {
      cidadeEncontrada = cidade.nameCity;
      alert(`Cidade: ${nomeCidade} está está nessa lista`);
      return cidadeEncontrada;
    } else if (cidade.nameCity !== nomeCidade) {
      cidadeEncontrada = alert(`Cidade: ${nomeCidade} não está nessa lista`);
    }
    return cidadeEncontrada;
  }
}

verificarCidade(city, "Berlin");
