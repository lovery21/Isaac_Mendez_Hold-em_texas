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


}
