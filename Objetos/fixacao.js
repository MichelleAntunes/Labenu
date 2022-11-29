const carrinho = {
    nome: `Michelle`,
    pagamento: `á vista`,
    endereco: `bibi, 10`,
    

}
carrinho.compras = [
    {
        nomeproduto: "peito de frango",
        preco: 22,
        quantidade: 1},

    { 
        nomeproduto: "chocolate",
        preco: 5, 
        quantidade: 2 },
]

const carrinhoPresente = {
    ...carrinho,
    nome: `Aida`,
    pagamento: `Cartão presente`
}

console.log("Cartão Presente:",carrinhoPresente)

const quantidadeTotal = 
carrinho.compras[0].quantidade + carrinho.compras[1].quantidade

console.log (`Você possui ${quantidadeTotal} produtos no seu carrinho.`) //quantidade total de produtos

console.log(carrinho.compras.length) //quantidade de diferentes itens
