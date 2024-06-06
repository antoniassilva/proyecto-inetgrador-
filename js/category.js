let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let categoria = urlParams.get('category');
console.log(categoria)

fetch(`https://fakestoreapi.com/products/category/${categoria}`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        let seccion= document.querySelector(".contenedor");
        let articulos = "";

        for (let i = 0; i < data.length; i++) {
            articulos += `
            <article class="elementos">
                <h3>${data[i].title}</h3>
                <img class="imagen" src="${data[i].image}" alt="aros">
                <p>${data[i].description}</p>
                <p>${data[i].price}</p>
                <a href="./cart.html"><img class="icono" src="./IMG/shopping-cart-free-png.webp" alt="carro"></a>
                <p><a href="./producto.html?id=${data[i].id}">Ver más</a></p>
            </article>
            `;
        }

        seccion.innerHTML = articulos;
    })
    .catch(function(err){
        console.log(err);
    })

//////navegador 
fetch("https://fakestoreapi.com/products/categories")
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);

    let secNav = document.querySelector(".navPrincipal");


   
    secNav.innerHTML = `
    <ul class="navegador letra2">
    <li>
        <a class="link" href="./index.html">Home</a>
    </li>
    <li>
        <a class="link" href="./category.html?category=${data[0]}">electronics</a>
    </li>
    <li>
        <a class="link" href="./category.html?category=${data[1]}">jewelery</a> 
    </li>
    <li>
        <a class="link" href="./category.html?category=${data[3]}">women's clothing</a>
    </li>

</ul>
<h1 class="tituloPrincipal letraPrincipal">Compra facil y rapido</h1>
        `;
    


})
.catch(function(err) {
    console.log(err);
});

    
