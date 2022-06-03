function cardProdutos (array) {
    for(let i = 0; i < array.length;i++){

        const ul = document.getElementById("listaProdutos")
        
        const li = document.createElement("li")

        const img = document.createElement("img")
            img.src = array[i].img
            img.alt = array[i].nome
            
        const h3 = document.createElement("h3")
            h3.innerText = array[i].nome

        const span = document.createElement("span")
            span.innerText = array[i].secao
        
        const p = document.createElement("p")
            p.innerText = `R$ ${array[i].preco}`
        
        const button = document.createElement("button")
            button.classList.add("buttonAdd")
            button.innerText = 'Comprar'
        
        const componentes = document.createElement("span")
            componentes.innerText = array[i].componentes

        
        ul.appendChild(li)
        
        li.append(img,h3,span,componentes,p,button)       
        
    }
    
}
cardProdutos(produtos)

function carrinho(){
    
        const main = document.querySelector("main") 
        
        const containerCarrinho = document.createElement("div")
            containerCarrinho.classList.add("containerCarrinho")
        
        const header = document.createElement("div")
            header.classList.add("header")
            const p = document.createElement("p")
            p.innerText = "Carrinho"
            header.appendChild(p)

        const box = document.createElement("div")
            box.classList.add("box")
            const p1 = document.createElement("p")
            p1.innerText = "Por enquanto não temos produtos no carrinho"
            box.appendChild(p1)

        containerCarrinho.append(header,box)
        main.appendChild(containerCarrinho)

        return containerCarrinho
}
carrinho()

function botaoComprar() {

    const buttonAdd = document.querySelectorAll(".buttonAdd")

    const box = document.querySelector(".box")

    const boxCarrinho = document.createElement("boxCarrinho")
    
    for(let i = 0; i<produtos.length; i++){
        

        buttonAdd[i].addEventListener("click", () => {
            box.innerHTML=""

        const boxCarrinho2 = document.createElement("div")
        boxCarrinho2.classList.add("boxCarrinho")

        const cardProdutoCarrinho = document.createElement("div")
        cardProdutoCarrinho.classList.add("cardCarrinho")

        const imagem = document.createElement("img")
        imagem.src = produtos[i].img
        imagem.alt = produtos[i].nome
        imagem.classList.add("imgCarrinho")

        const nomeProduto = document.createElement("h5")
        nomeProduto.innerText = produtos[i].nome
        nomeProduto.classList.add("nomeProduto")

        const secaoProduto = document.createElement("span")
        secaoProduto.innerText = produtos[i].secao
        secaoProduto.classList.add("secaoProduto")

        const precoProduto = document.createElement("p")
        precoProduto.innerText = produtos[i].preco
        precoProduto.classList.add("precoProduto")
    
        box.appendChild(boxCarrinho)
        boxCarrinho.appendChild(boxCarrinho2)
        boxCarrinho2.appendChild(cardProdutoCarrinho)
        cardProdutoCarrinho.append(imagem,nomeProduto,secaoProduto,precoProduto)

        
        } )

    }
}botaoComprar()

/*
function soma (array){
    let somaTotal = 0
    array.forEach(array => {
        let preco = array.preco
        somaTotal += parseInt(preco)
    const precoTotal = document.getElementById("precoTotal")
    precoTotal.innerHTML= `R$ ${somaTotal},00`
    });
}
soma(produtos)
*/
/*
function contarItensCarrinho (){

    //box2.innerHTML = ""
     
    const quantidadeItens = document.createElement("p")
      quantidadeItens.classList = "quantidadeItens" 

    const quantidadeTotal = document.createElement("p")
      quantidadeTotal.classList = "quantidadeTotal"
      quantidadeTotal.innerHTML = "Quantidade:"

      box2.appendChild(quantidadeTotal)
      box2.appendChild(quantidadeItens)              
      quantidadeItens.innerHTML = quantidade
    
    const valorItens = document.createElement("p")
      valorItens.classList = "valorItens"
    const valorTotal = document.createElement("p")
      valorTotal.classList = "valorTotal"
      valorTotal.innerHTML = "Total:"
      box2.appendChild(valorTotal)
      box2.appendChild(valorItens)
      valorItens.innerHTML = `R$ ${soma},00`
  
  }
*/
function somaItensCarrinho(){
    let soma = 0
    let quantidade = 0

    const box = document.querySelector(".box")
    
}somaItensCarrinho()

function filtrarProdutosSecao (listaProdutos, secao) {

    let produtosFiltradosSecao = listaProdutos.filter((produtos) => {
        return produtos.secao.toLowerCase().indexOf(secao.toLowerCase()) !== -1        
    })
    //soma(produtosFiltradosSecao)
    return produtosFiltradosSecao
    
}

function filtrarProdutosCategoria (listaProdutos, categoria) {

    let produtosFiltradosCategoria = listaProdutos.filter((produtos) => {
        return produtos.categoria.toLowerCase().indexOf(categoria.toLowerCase()) !== -1        
    })
    //soma(produtosFiltradosCategoria)
    return produtosFiltradosCategoria
    
}

function filtrarProdutosNome (listaProdutos, nome) {

    let produtosFiltradosNome = listaProdutos.filter((produtos) => {
        return produtos.nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1        
    })
    //soma(produtosFiltradosNome)
    return produtosFiltradosNome
    
}

function buscarPorNome() {
    const button = document.querySelector("#enviar")

    button.addEventListener("click", function(e){
        e.preventDefault()

        const name = document.querySelector(".campoBuscaPorNome")

        const value = name.value.trim().toLowerCase()

        if(value == `'f' || value == 'p'` || value == 'l'){
            const ul = document.getElementById("listaProdutos")
            ul.innerHTML = ""

            return cardProdutos(filtrarProdutosCategoria (produtos, value))     

        }else if(value == 'h' || value == 'p' || value == 'l' ){
            const ul = document.getElementById("listaProdutos")
            ul.innerHTML = ""

            return cardProdutos(filtrarProdutosSecao (produtos, value))  
        }else{
            const ul = document.getElementById("listaProdutos")
            ul.innerHTML = ""

            return cardProdutos(filtrarProdutosNome (produtos, value)) 
        }

    })

}
buscarPorNome()

function clickFiltrarHortiFruti (produtos){

    let buttonHortiFruti = document.getElementsByClassName("estiloGeralBotoes--filtrarHortifruti")[0]
        buttonHortiFruti.addEventListener("click", function(){
            let hortiFruti = filtrarProdutosSecao (produtos, 'hortifruti')
            const ul = document.getElementById("listaProdutos")
            ul.innerHTML = ""
            //soma(hortiFruti)
            return cardProdutos(hortiFruti)
            
        })
}
clickFiltrarHortiFruti(produtos)

function clickFiltrarPanificadora (produtos){

    let buttonPanificadora = document.getElementsByClassName("estiloGeralBotoes--filtrarPanificadora")[0]
        buttonPanificadora.addEventListener("click", function(){
            let Panificadora = filtrarProdutosSecao (produtos, 'Panificadora')
            const ul = document.getElementById("listaProdutos")
            ul.innerHTML = ""
            //soma(Panificadora)
            return cardProdutos(Panificadora)
            
        })
}
clickFiltrarPanificadora(produtos)

function clickFiltrarLaticinio (produtos){

    let buttonLaticinio = document.getElementsByClassName("estiloGeralBotoes--filtrarLaticínios")[0]
        buttonLaticinio.addEventListener("click", function(){
            let Laticinio = filtrarProdutosSecao (produtos, 'Laticínio')
            const ul = document.getElementById("listaProdutos")
            ul.innerHTML = ""
            //soma(Laticinio)
            return cardProdutos(Laticinio)
            
        })
}
clickFiltrarLaticinio(produtos)

function mostrarTodos(produtos) {
    
    let buttonMostrarTodos = document.getElementsByClassName("estiloGeralBotoes--mostrarTodos")[0]
        buttonMostrarTodos.addEventListener("click", function(){
            const ul = document.getElementById("listaProdutos")
            ul.innerHTML = ""
            //soma(produtos)
            return cardProdutos(produtos)
        })
}
mostrarTodos(produtos)