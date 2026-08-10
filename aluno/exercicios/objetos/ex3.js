const carro = {
    nome: "Peugeot 208",
    cor: "Cinza Cósmico",
    modelo: "2025/26",
    opcionais: {
        arCondicionado: true,
        direcaoEletrica: true,
        multimidia: false,
    }
};

function exibirDetalhes(carro){
    console.log("Nome: ", carro.nome)
    console.log("Nome: ", carro.cor)
    console.log("Nome: ", carro.modelo)
    console.log("Opcionais: ")
    console.log("Ar Condicionado: ", carro.opcionais.arCondicionado)
    console.log("Direção Elétrica: ", carro.opcionais.direcaoEletrica)
    console.log("Multimidia: ", carro.opcionais.multimidia)
}

function alterarOpcional(carro, opcional, valor){
    carro.opcionais[opcional] = valor
}

exibirDetalhes(carro)
alterarOpcional(carro, "multimidia", true)
console.log("Depois da alteração: ")
exibirDetalhes(carro)