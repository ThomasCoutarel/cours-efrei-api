function modulo(a, b) {
  if (b === 0) {
    throw new Error("La division par zéro est interdite.");
  }
  return a % b;
}
