const carrinho = {
	cliente: "Alice",
	itens: [
	{ nome: "Smartphone", preco: 2200, quantidade: 1 },
	],
	cupons: ["MENOS10", "PROMO10", "10PORCENTO"],
    adicionarProduto(nome, preco, quantidade){
        for(let item of this.itens){
            if(item.nome === nome){
                item.quantidade += quantidade
                return
            }
        }

        this.itens.push({
            nome: nome,
            preco: preco,
            quantidade: quantidade
        })
    },

    calcularTotal(){
        this.total = 0
        for(let item of this.itens){
            this.total += item.preco * item.quantidade
        }
    },

    aplicarDesconto(cupom){
        if(this.cupons.includes(cupom)){
            this.cupom = cupom
            this.calcularTotal()
            this.total = this.total * 0.9
        }
    },

    exibirCupom(){
        console.log("Cliente: ", this.cliente)
        
        for(let item of this.itens){
            console.log(item.nome)
            console.log("Quantidade: ", item.quantidade)
            console.log("Preço: ", item.preco)
        }
        console.log("Total: ", this.total)
        
        if(this.cupom){
            console.log("Cupom: ", this.cupom)
        }else{
            console.log("Nenhum cupom aplicado")
        }
    }
}

carrinho.adicionarProduto("Guitarra de brinquedo", 200, 2)
carrinho.calcularTotal()
carrinho.aplicarDesconto("MENOS10")
carrinho.exibirCupom()