function gerarTextoCompras(itens){
    return itens.join(", ")
}
let itens= ["Macarrão", "Arroz", "Chocolate", "Pêssego"]
console.log("lista: ",gerarTextoCompras(itens))