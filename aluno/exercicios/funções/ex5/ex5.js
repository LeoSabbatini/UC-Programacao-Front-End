function exibirProdutoComPreco(nome, preco) {
  const p = Number(preco);

  if (isNaN(p)) {
    console.error("Ex 5.1 - Erro: Preço inválido.");
    return;
  }

  console.log(`${nome} ........R$ ${p.toFixed(2)}`);
}
const precoDaParcela = function(precoTotal, quantidadeParcelas = 1) {
  const total = Number(precoTotal);
  const parcelas = parseInt(quantidadeParcelas);

  if (isNaN(total) || isNaN(parcelas) || parcelas <= 0 || parcelas > 12) {
    return total;
  }

  return total / parcelas;
};
function aplicarDesconto(valorTotal, desconto) {
  const total = Number(valorTotal);
  const desc = Number(desconto);

  if (isNaN(total) || isNaN(desc)) total;
  

  if (desc > total) {
    return 0;
  }

  return total - desc;
}
const aplicarCupomDeDesconto = function(valorTotal, cupom) {
  const total = Number(valorTotal);

  if (isNaN(total)) {
    return 0;
  }
  const cupomLimpo = String(cupom).trim().toUpperCase();

  if (cupomLimpo === 'CUPOM50') {
    return aplicarDesconto(total, 50);
  } else if (cupomLimpo === 'CUPOM100') {
    return aplicarDesconto(total, 100);
  } else if (cupomLimpo === 'CUPOM200') {
    return aplicarDesconto(total, 200);
  } else {
    return total;
  }
};
//5.1
exibirProdutoComPreco("Jaqueta Jeans", 220);

//5.2
console.log("Preço parcela (10x): R$", precoDaParcela(1200, 10));

//5.3
console.log("Desconto R$ 30 em R$ 100: R$", aplicarDesconto(100, 30));
console.log("Desconto R$ 150 em R$ 100: R$", aplicarDesconto(100, 150));

//5.4
console.log("Pedido R$ 500 + CUPOM100: R$", aplicarCupomDeDesconto(500, "CUPOM100"));
console.log("Pedido R$ 500 + CUPOM_INVALIDO: R$", aplicarCupomDeDesconto(500, "ABC"));