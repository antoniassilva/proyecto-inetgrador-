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

