function converterMinpHora(minutos) {
  const min = Number(minutos);

  if (isNaN(min)) {
    console.error("Erro: Valor inválido.");
    return null;
  }

  return min / 60;
}
console.log(`150 minutos = ${converterMinpHora(150)} horas`);
console.log(`60 minutos = ${converterMinpHora("60")} horas`);