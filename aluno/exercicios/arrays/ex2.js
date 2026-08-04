function filtrarNumeros(array) {
  if (!Array.isArray(array)) return [];

  const numeros = [];

  for (const item of array) {
    const num = Number(item);
    if (!isNaN(num) && typeof item !== 'boolean' && item !== null && String(item).trim() !== '')numeros.push(num);
    }
  return numeros;
}

const dadosMisturados = [10, "20", "texto", true, null, 3.14, ""];

console.log("Array original (com erros):", dadosMisturados);
console.log("Array filtrado (apenas números):", filtrarNumeros(dadosMisturados));