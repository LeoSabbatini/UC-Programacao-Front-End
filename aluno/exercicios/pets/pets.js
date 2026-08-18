let btnGato = document.getElementById('btn-gato')
let btnCachorro = document.getElementById('btn-cao')
let imagemPet = document.getElementById('imagem-pet')
let btnCorBackground = document.getElementById('btn-background')
let cores = ['#06F874', '#8706f8', '#f806a7', '#f80606', '#f8e806']
let body = document.querySelector('body')
btnGato.addEventListener("click", function(){
    let fotoGato = "https://images.pexels.com/photos/20277220/pexels-photo-20277220.jpeg?auto=compress&cs=tinysrgb&w=400"
    imagemPet.src = fotoGato;
})

btnCachorro.addEventListener("click",function(){
    let fotoCachorro = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
    imagemPet.src = fotoCachorro;
})

btnCorBackground.addEventListener("click", function(){
    body.style.backgroundColor = cores[0]
    let corAtual = ""    
    corAtual = cores.shift()
    cores.push(corAtual)
})