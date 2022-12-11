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

for (cities of city) {
  for (propriedade in cities) {
    console.log(`${propriedade}: ${cities[propriedade]}`);
  }
  console.log("----------------------");
}

function imprimirRelatorio(objeto) {
  for (let elemento in city);
}

console.log(imprimirRelatorio(city));

/*const averegePopulation =
  (city1.quantity1 + city2.quantity2 + city3.quantity3) / 3;

city1.touristAttraction1 = "Buchenwald Memorial";
city2.touristAttraction2 = "The Dresden Zwinger";
city3.touristAttraction3 = "Altstadt";
const germanCities = [];

if (city[0].capital1 === true) {
  console.log(germanCities.push(city1));
} else {
  alert(`Weimar não é capital do estado da Turíngia `);
}

if (city2.capital2 === true) {
  germanCities.push(city2);
  console.log(germanCities);
} else {
  alert("Nürnberg não é capital do estado da Saxônia");
}

if (city3.capital3 === true) {
  germanCities.push(city3);
  console.log(germanCities);
} else {
  alert("Nürnberg não é capital do estado da Bavária");
}



console.log(
  `População média destas cidades é de  ${averegePopulation.toFixed(3)}`
);
*/
