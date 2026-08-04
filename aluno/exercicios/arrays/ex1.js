const fila = ["Leo", "Amigo", "Inimigo"];
fila.push("Corinthians");


console.log("Fila completa:");
for (let i = 0; i < fila.length; i++) {
  console.log(fila[i]);
}

const removido = fila.shift();

console.log("\nNova fila:");
for (let i = 0; i < fila.length; i++) {
  console.log(fila[i]);
}

console.log("\nRemovido: \n" + removido)