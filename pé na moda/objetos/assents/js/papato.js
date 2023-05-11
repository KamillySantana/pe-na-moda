var exibe = document.getElementById("exibe")

var calcados = {
    produtos: [
        {
            nome: "Tênis",
            cor: "Preto",
            Tamanho: 36,
            marca: "Nike",
            preço: 300.00,
            categoria: "Masculino Adulto"
        },
        {
            nome: "Tênis",
            cor: "Preto",
            Tamanho: 36,
            marca: "Nike",
            preço: 300.00,
            categoria: "Feminino Adulto"
        }
    ],
    adicionar(produto) {
        this.produtos.push(produto)
    },

    alterar(key, novoProduto) {
        this.produtos[key] = novoProduto
    },

    excluir(deletar) {
        if (deletar < this.produtos.length) {
            delete this.produtos[deletar]
            console.log("Produto removido com sucesso!");
        } else {
            console.log("Índice inválido. O produto não foi removido.");
        }
    }
}

exibe.innerHTML = calcados
