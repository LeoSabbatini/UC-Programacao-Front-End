function maisPedidos(pedidos,novoPedido) {
    const pedidoRemovido = pedidos.shift();
    pedidos.push(novoPedido);
    
    return pedidos;
}
let pedidos = ["0001","0002","0003","0004","0005","0006","0007","0008","0009","0010"]

console.log("Lista atual: ",pedidos)
maisPedidos(pedidos,"0011")
console.log("Nova lista de pedidos: ",pedidos)
