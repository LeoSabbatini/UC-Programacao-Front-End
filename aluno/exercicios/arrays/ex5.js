function gerarTextoCompras(itens,formato){
    if (formato == "texto"){
        return itens.join(", ")

    }else{
        let lista = ""
        for (let i = 0; i < itens.length; i++) {
        lista += "\n•" + itens[i];
}       return lista;
    }



}
let itens= ["Macarrão", "Arroz", "Chocolate", "Pêssego"]
let itens2= ["Cebola verde", "cebola podre", "cebolinha"]


console.log("lista: ",gerarTextoCompras(itens, "lista"))
console.log("lista: ",gerarTextoCompras(itens2, "texto"))