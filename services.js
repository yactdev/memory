// funcion to sort ramdoly the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generar un índice aleatorio antes del elemento actual
    const j = Math.floor(Math.random() * (i + 1));
    // Intercambiar elementos en los índices i y j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { shuffleArray };
