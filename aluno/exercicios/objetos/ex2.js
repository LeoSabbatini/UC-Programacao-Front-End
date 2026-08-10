const aluno = {
    nome: "Leonardo",
    idade: 19,
    curso: "Análise e Desenvolvimento de Sistemas",
    notas: [8.5,7,9.5,10]
};

function calcularMedia(aluno){
    let soma = 0

    for (let i = 0; i < aluno.notas.length;i++){
        soma += aluno.notas[i]
    }
    const media = soma / aluno.notas.length
    aluno.media = media
    console.log("Nome: ", aluno.nome)
    console.log("Média: ", aluno.media)
}

calcularMedia(aluno)