#  Simulador de Mano de Poker (Texas Hold'em)

Este proyecto genera una mano de poker (Texas Hold'em) y detecta automáticamente qué tipo de jugada se ha formado: pareja, trío, escalera, full house, ¡o incluso escalera real!

##  ¿Cómo funciona?

1. **Se crea un mazo** estándar de 52 cartas (2 al A, con 4 palos: ♠ ♥ ♦ ♣).
2. **Se baraja** el mazo al azar.
3. Se reparten:
   - **2 cartas ocultas** (hole cards)
   - **5 cartas comunitarias** (community cards)
4. Se analizan las 7 cartas en total para determinar la mejor jugada posible.

---

##  Lógica del análisis de la mano

- Separamos **valores** (`2`, `J`, `A`...) y **palos** (`♠`, `♥`...).
- Contamos cuántas veces aparece cada valor (para detectar pares, tríos, cuartetos).
- Contamos los palos (para detectar un flush).
- Revisamos si hay secuencias de valores para detectar **escaleras**.
- Si la escalera es del mismo palo, se detecta como **escalera de color** (straight flush).

---

##  Jugadas que reconoce

-  **Straight Flush** (Escalera de color)
-  **Four of a Kind** (Póker)
-  **Full House** (Trío + Par)
-  **Flush** (5 cartas del mismo palo)
-  **Straight** (5 valores consecutivos)
-  **Three of a Kind** (Trío)
-  **Two Pair** (Dos pares)
-  **Pair** (Un par)
-  **High Card** (Carta más alta)

---

##  Estructura del código

- `crearMazo()`: genera las 52 cartas.
- `barajar(mazo)`: mezcla el mazo.
- `hand(holeCards, communityCards)`: analiza la mejor jugada.
- `jugar()`: función principal que reparte y muestra el resultado en consola.

---

##  Ejemplo de salida

```bash
Hole Cards: [ 'Q♥', 'Q♣' ]
Community Cards: [ '2♠', '5♦', 'Q♦', '9♣', '3♠' ]
Resultado: { type: 'three-of-a-kind', ranks: [ 'Q' ] }
