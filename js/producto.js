let queryString = new URLSearchParams(location.search);

let idProducto = queryString.get("id"); 
idProducto = parseInt(idProducto);

let endpoint = `https://fakestoreapi.com/products/${idProducto}`

fetch(endpoint)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);

        let sectionImagen = document.querySelector(".sectionImagen");

        sectionImagen.innerHTML = `<img src="${data.image}" alt="Foto del producto ${data.title}" >`

        let sectionContenido = document.querySelector(".sectionContenido");

        let articulo = ""

        articulo += `
            <div class="letra">
                <h2>${data.title}</h2>
                <a href="./category.html?category=${data.category}">${data.category}</a>
                <p>$ ${data.price}</p>
                <p class="contenidoDescripcion">${data.description}</p>
                
                <button>Agregar</button>
                
                <a href="./cart.html"><img class="icono" src="./IMG/shopping-cart-free-png.webp" alt="carro"></a>
            </div>
        `
        sectionContenido.innerHTML = articulo

        let addButton = document.querySelector("button");
        addButton.addEventListener('click', function(event) {
            event.preventDefault();

            let carrito = JSON.parse(localStorage.getItem("carrito"));

            
            if (!carrito) {
                carrito = [];
            }

            
            if (carrito.includes(data.id)) {
                
            } else {
                carrito.push(data.id);
                localStorage.setItem("carrito", JSON.stringify(carrito));
            }
        });
        
    })
    
   
    .catch(function (error) {
        console.log(error)
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
