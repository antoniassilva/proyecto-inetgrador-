document.addEventListener("DOMContentLoaded", function(){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let contenido = document.querySelector(".contenedor");

    if (!carrito || carrito.length === 0) {
        contenido.innerHTML = "<p>El carrito está vacío</p>";
    } else {
        let sectionContenido = document.querySelector(".contenedor");
        let articulo = ""; 

        for (let i = 0; i < carrito.length; i++) {
            let productId = carrito[i]; 

            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);

                    articulo += `
                        <article class="elementos">
                            <h3>${data.title}</h3>
                            <img class="imagen" src="${data.image}" alt="${data.title}">
                            <p>${data.description}</p>
                            <p>$ ${data.price}</p>
                            <a href="./cart.html"><img class="icono" src="./IMG/shopping-cart-free-png.webp" alt="carro"></a>
                            <p><a href="./producto.html?id=${data.id}">Ver más</a></p>
                        </article>
                    `;

                    sectionContenido.innerHTML = articulo;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        let finalizarCompraLink = document.querySelector(".finalizar");
        
        if (finalizarCompraLink) {
            finalizarCompraLink.addEventListener("click", function(event) {
                event.preventDefault();

                
                localStorage.removeItem("carrito");

                
                alert("¡Gracias por tu compra!");

                
                window.location.href = "./index.html";
            });
        }
    }
});








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

