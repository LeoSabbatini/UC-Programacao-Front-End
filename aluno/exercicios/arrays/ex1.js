const fila = ["Ana", "Carlos", "Beatriz"];

fila.push("Daniel");

console.log("--- Fila completa ---");
for (let i = 0; i < fila.length; i++) {
  console.log(fila[i]);
}

const atendido = fila.shift();
console.log("\nAtendido:", atendido);

console.log("\n--- Fila atualizada ---");
for (let i = 0; i < fila.length; i++) {
  console.log(fila[i]);
}