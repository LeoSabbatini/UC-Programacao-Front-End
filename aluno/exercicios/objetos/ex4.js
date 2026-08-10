const produtos_vendas = {
	cafes: [
		{
			sku: 7654,
			marca: "Povo Brasileiro",
			preco: 24.00,
			categoria: "Mercearia"
		},
		{
			sku: 8765,
			marca: "Soberano - Gourmet",
			preco: 29.00,
			categoria: "Mercearia",
		},
		{
			sku: 3467,
			marca: "Dose Certa",
			preco: 27.00,
			categoria: "Mercearia"
		}
	]	
}

const produtos_estoque = {
	cafes: [
		{
			sku: 3467,
			peso: 500.00,
			unidade: "mg",
			estoque: 101
		},
		{
			sku: 7654,
			peso: 250.00,
			unidade: "mg",
			estoque: 182
		},
		{
			sku: 8765,
			peso: 250.00,
			unidade: "mg",
			estoque: 46
		}
	]
}

const produtos = []
for (let venda of produtos_vendas.cafes){
    for (let estoque of produtos_estoque.cafes){
        if (venda.sku === estoque.sku){
            produtos.push({
                sku: venda.sku,
                marca: venda.marca,
                preco: venda.preco,
                categoria: venda.categoria,
                peso: estoque.peso,
                unidade: estoque.unidade,
                estoque: estoque.estoque
            })
        }
    }   
}

console.log(produtos)