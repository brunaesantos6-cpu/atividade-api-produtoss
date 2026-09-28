async function carregarDados() {
  const url = "https://urban-happiness-xrv6q7xq9grvfv577-3000.app.github.dev/";
   const resposta = await fetch(url);

    const dados = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");
    console.log(dados);
    console.log(listaProdutos);

   
    let card = dados.map(produto => `
        <div>
                <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$ ${produto.preco}</p>
        </div>
    `).join("");


listaProdutos.innerHTML = card;

}
carregarDados();

