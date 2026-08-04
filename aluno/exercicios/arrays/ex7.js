function ban(banido, nick){
    return banido.includes(nick)
}
let banido = ["WiseScorpion", "Plabbernom", "xxx33Fibberflop"]

console.log(ban(banido, "WiseScorpion"))
console.log(ban(banido, "KaleorixTheGreat"))