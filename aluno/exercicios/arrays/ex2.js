function separarNumeros(arr) {
  const numeros = [];
  const naoNumeros = [];

  for (const item of arr) {
    if (typeof item === 'number' && !isNaN(item)) {
      numeros.push(item);
    } else {
      naoNumeros.push(item);
    }
  }

  return { numeros, naoNumeros};
}

const dados = [10, "texto", 5.5, true, NaN, 42, null];
const resultado = separarNumeros(dados);

console.log("Números:", resultado.numeros);
console.log("Filtrados:", resultado.naoNumeros);