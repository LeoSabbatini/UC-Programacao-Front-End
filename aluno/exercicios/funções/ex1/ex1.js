function acharMaior(n1, n2, n3) {
  const num1 = Number(n1);
  const num2 = Number(n2);
  const num3 = Number(n3);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.error("Erro: Digite números válidos.");
    return;
  }

  let maior = num1;

  if (num2 > maior) {
    maior = num2;
  }

  if (num3 > maior) {
    maior = num3;
  }

  console.log(`O maior número é: ${maior}`);
}
acharMaior(10, 50, 23); 
acharMaior("-5", "-1", "-10");
acharMaior(8, "abc", 12)