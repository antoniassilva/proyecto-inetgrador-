fetch('https://fakestoreapi.com/products/category/electronics')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);

        let sec = document.querySelector(".electronica");
        let articulos = "";

        for (let i = 0; i < 5; i++) {
            articulos += `
            <article class="elementos letraPrincipal">
                <h3>${data[i].title}</h3>
                <img class="imagen" src="${data[i].image}" alt="compu">
                <p>${data[i].description}</p>
                <p>${data[i].price}</p>
                <a href="./cart.html"><img class="icono" src="./IMG/shopping-cart-free-png.webp" alt="carro"></a>
                <p><a href="./producto.html?id=${data[i].id}">Ver más</a></p>
            </article>
            `;
        }

        sec.innerHTML = articulos;
    })
    .catch(function(err) {
        console.log(err);
    });



    //////////// joyas

    fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);

        let secJoyas = document.querySelector(".joyas");
        let articulosJoyas = "";

        for (let i = 0; i < 4; i++) {
            articulosJoyas += `
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

        secJoyas.innerHTML = articulosJoyas;
    })
    .catch(function(err) {
        console.log(err);
    });


    ///////////// ropa
fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);

        let secRopa = document.querySelector(".ropa");
        let articulosRopa = "";

        for (let i = 0; i < 5; i++) {
            articulosRopa += `
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

        secRopa.innerHTML = articulosRopa;
    })
    .catch(function(err) {
        console.log(err);
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

