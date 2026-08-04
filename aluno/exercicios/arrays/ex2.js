function filtrarApenasNumeros(lista) {
  if (!Array.isArray(lista)) {
    console.error("Erro: Tem que ser array.");
    return [];
  }

  const numerosEncontrados = [];

  for (const elemento of lista) {
    const numeroConvertido = Number(elemento);

    const naoBoolean = typeof elemento !== "boolean";
    const naoVazioOuNull = elemento !== null && String(elemento).trim() !== "";

    if (!isNaN(numeroConvertido) && naoBoolean && naoVazioOuNull) {
      numerosEncontrados.push(numeroConvertido);
    }
  }

  return numerosEncontrados;
}

const dadosMisturados = [10, "20", "texto", true, null, undefined, 3.14, "", " 42 ", NaN];
const apenasNumeros = filtrarApenasNumeros(dadosMisturados);

console.log("Array original:", dadosMisturados);
console.log("Apenas números filtrados:", apenasNumeros);