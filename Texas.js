// mapa para comparar
const valueMap = {
  "2": 2, "3": 3, "4": 4, "5": 5,
  "6": 6, "7": 7, "8": 8, "9": 9,
  "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14
};

// crear mazo
function crearMazo() {
  const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const palos = ["♠", "♥", "♦", "♣"];
  const mazo = [];

  for (let valor of valores) {
    for (let palo of palos) {
      mazo.push(valor + palo);
    }
  }

  return mazo;
}

//  barajear
function barajar(mazo) {
  for (let i = mazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazo[i], mazo[j]] = [mazo[j], mazo[i]]; // intercambia cartas
  }
}
// Función principal para evaluar la mano
function hand(holeCards, communityCards) {
  const allCards = holeCards.concat(communityCards);
  const values = [];
  const suits = [];


    // Extraer valores y palos de todas las cartas
  for (let i = 0; i < allCards.length; i++) {
    const card = allCards[i];
    let value = card.slice(0, -1);
    let suit = card.slice(-1);

    values.push(value);
    suits.push(suit);
  }

    // Contar las ocurrencias de cada valor
const valueCounts = {};
for (let value of values) {
    valueCounts[value] = (valueCounts[value] || 0) + 1;
  }

  // Contar las ocurrencias de cada palo
const suitCounts= {};
for (let suit of suits) {
    suitCounts[suit] = (suitCounts[suit] || 0) + 1;
  }
let pairs=[];
let three=null;
let four=null;

// Identificar pares, trios y cuartetos
for(let value in valueCounts){
  if(valueCounts[value]===2){
    pairs.push(value);
  }else if(valueCounts[value]===3){
    three=value;
  }
  else if(valueCounts[value]===4){
    four=value;
  }
  
}






}//// Funtion hand