// meu item será cidades turisticas na Alemanha

const city1 = {
  nameCity1: `Weimar`.toUpperCase(),
  stade3: "Turíngia",
  quantity1: Number(`65.004`),
  capital1: false,
  foundationYear1: 1918,
  mainParty: "Zwiebelfest e Weimarer Weihnacht",
};
const city2 = {
  nameCity2: "Dresden".toUpperCase(),
  stade3: "Saxônia",
  quantity2: Number(`554.649`),
  capital2: true,
  foundationYear2: 1173,
  mainParty: "Striezelmarkt e Bunte Republik Neustadt",
};
const city3 = {
  nameCity3: "Nürnberg".toUpperCase(),
  stade3: "Bavária",
  quantity3: Number(`518.365`),
  capital3: false,
  foundationYear3: 1040,
  mainParty: " Nürnberg Christkindlesmarkt e  Classic Open Air",
};

const averegePopulation =
  (city1.quantity1 + city2.quantity2 + city3.quantity3) / 3;

city1.touristAttraction1 = "Buchenwald Memorial";
city2.touristAttraction2 = "The Dresden Zwinger";
city3.touristAttraction3 = "Altstadt";
const germanCities = [];

if (city1.capital1 === true) {
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
