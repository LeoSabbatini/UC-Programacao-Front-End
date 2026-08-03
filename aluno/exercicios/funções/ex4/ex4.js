const retornarQuantidadeDeGasolina = function(distanciaDestino, consumoPor100km) {
  const distancia = Number(distanciaDestino);
  const consumo = Number(consumoPor100km);

  if (isNaN(distancia) || isNaN(consumo) || distancia <= 0 || consumo <= 0) {
    console.error("Erro: Digite números maiores que zero.");
    return null;
  }

  const distanciaTotal = distancia * 2;
  return (distanciaTotal * consumo) / 100;
};
console.log(`Gasolina necessária: ${retornarQuantidadeDeGasolina(120, 8)}L`);
console.log(`Gasolina necessária: ${retornarQuantidadeDeGasolina(50, 10)}L`);