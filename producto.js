let queryString = new URLSearchParams(location.search);

let idProducto = queryString.get("id"); // localhost:5500/producto?id=12 --> detalle del producto con "12"
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
                <!-- botón agregar al carrito -->
                <button>Agregar</button>
                <!-- botón ver el carrito -->
                <a href="./cart.html"><img class="icono" src="./IMG/shopping-cart-free-png.webp" alt="carro"></a>
            </div>
        `
        sectionContenido.innerHTML = articulo

        return data
    })
    .then(function (data) {
        let addButton = document.querySelector("button");

        addButton.addEventListener('click', function(event) {
            event.preventDefault();

            let carrito = JSON.parse(localStorage.getItem("carrito")); // [2,3,56,7,2,8765] => [saco azul, remera negra, reloj]

            if (carrito) {
                carrito.push(data.id)
            } else {
                carrito = []
                carrito.push(data.id)
            }

            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
    })
    .catch(function (error) {
        console.log(error)
    })