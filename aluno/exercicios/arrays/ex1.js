function gerenciarFilaAtendimento(filaInicial, novaPessoa) {
  if (!Array.isArray(filaInicial)) {
    console.error("Erro: A fila deve ser um Array.");
    return;
  }

  if (typeof novaPessoa !== "string" || novaPessoa.trim() === "") {
    console.error("Erro: Digite um nome válido.");
    return;
  }

  filaInicial.push(novaPessoa.trim());

  console.log("===Fila Completa===");
  for (let i = 0; i < filaInicial.length; i++) {
    console.log(`${i + 1}º da fila: ${filaInicial[i]}`);
  }

  const pessoaAtendida = filaInicial.shift();
  console.log(`\nAtendendo agora: ${pessoaAtendida}`);

  console.log("\n===Fila Atualizada===");
  for (let i = 0; i < filaInicial.length; i++) {
    console.log(`${i + 1}º da fila: ${filaInicial[i]}`);
  }

  return filaInicial;
}

const pessoasIniciais = ["Ana", "Carlos", "Beatriz"];
gerenciarFilaAtendimento(pessoasIniciais, "Daniel");


