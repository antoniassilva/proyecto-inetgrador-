let button = document.querySelector("button");

button.addEventListener('click', function (event) {
    event.preventDefault();

    let inputEmail = document.querySelector("#input-email");
    let inputPassword = document.querySelector("#input-password");

    let contador = 0;

    let correo = inputEmail.value;
    
    if (correo === "") {
        alert("Por favor complete el campo correo!")
        contador++ 
    } 

    let contrasenia = inputPassword.value;

    if (contrasenia === "") {
        alert("Por favor complete el campo contraseña!")
        contador++ 
    } else if (contrasenia.length < 6) {
        alert("La contraseña debe tener por lo menos 6 caracteres!")
        contador++ 
    }

    if (contador === 0) { 
        localStorage.setItem("email-usuario", correo)
        document.querySelector("form").submit()
    }

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
