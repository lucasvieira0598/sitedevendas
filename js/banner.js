
document.getElementById("btBannerAnterior").addEventListener("click",()=>{
    //Corpo do addEventListener
    //O que acontece se for pressionado 
    if(BannerIndex<=0){
        BannerIndex = 2
    }
    else{
        BannerIndex-=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
})

CardProduto.EscolherTipo("cardProduto sb")
CardProduto.CriarCards("PortaCard1","Tenis da Adidas", "É um tenis de alta performance")
CardProduto.CriarCards("PortaCard1","Tenis da Adidas", "É um tenis de alta performance")

let cardVenda = new card()
cardVenda.EscolherTipo("card sb")
cardVenda.CriarCards("PortaCard1", "Tenis da Olympikus", "Melhor que os dois")

let CardNovo = new card ()
CardNovo.EscolherTipo("card03 sb")
CardNovo.CriarCards("PortaCard1", "Tenis da Nike", "É um tenis de alta perfomance também")
CardNovo.CriarCards("PortaCard1", "Tenis da Nike", "É um tenis de alta perfomance também")


MainPage()

function ProdutosPage(){
    let pagina = document.getElementById("pagina")
    pagina.innerHTML = ""
    document.getElementsByClassName("localNav")[0].getElementsByTagName("h4")[0].innerHTML = "Produtos"
}

let HomeMenu = document.getElementById("Menu_02").getElementsByTagName("li")[0].getElementsByTagName("a")[0]
HomeMenu.addEventListener("click",()=>{

})

let ProdutoMenu = document.getElementById("Menu_02").getElementsByTagName("li")[1].getElementsByTagName("a")[0]
ProdutoMenu.addEventListener("click",ProdutosPage)

export default Banner 