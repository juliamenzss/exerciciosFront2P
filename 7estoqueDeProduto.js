const produtos = [
    {nome: 'Caneca', preco: 50, quantidade: 5},
    {nome: 'Prato', preco: 15, quantidade: 10},
    {nome: 'Escumadeira', preco: 18, quantidade: 8},
]

function valorTotalEstoque(produtos){
    let valorTotal = 0;
    for(let produto of produtos){
        valorTotal += produto.preco * produto.quantidade;
    }
    return valorTotal;
}
const valorTotalEstq = valorTotalEstoque(produtos);
console.log(`O valor total do estoque em dinheiro é: R$ ${valorTotalEstq}`)