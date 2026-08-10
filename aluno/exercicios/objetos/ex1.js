const produto1 = {
    nome: "Sorvete Jundiá",
    preco: 19.90,
    categoria: "Sobremesas"
};

const produto2 = {
    nome: "Tubes Fini Caixa 500mg",
    preco: 24.50,
    categoria: "Mercearia"
};

function produtoMaisCaro(produto1, produto2){
    if (produto1.preco > produto2.preco){
        console.log("Produto mais caro: ")
        console.log("Item: ",produto1.nome)
        console.log("Preco: ",produto1.preco)
        console.log("Preco: ",produto1.preco)
    }
    else{
        console.log("Produto mais caro: ")
        console.log("Item: ",produto2.nome)
        console.log("Preco: ",produto2.preco)
        console.log("Preco: ",produto2.preco)

    }
}

produtoMaisCaro(produto1, produto2)