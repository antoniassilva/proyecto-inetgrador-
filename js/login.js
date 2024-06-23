let campoEmail = document.querySelector('#email');
let campoContra = document.querySelector('#contra');



let formulario = document.querySelector('form');



formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let correo = campoEmail.value;

    if (campoEmail.value === '') {
        alert("Por favor complete el campo correo!");
    } 
    else if (campoContra.value === '') {
        alert("Por favor complete el campo contraseña!");
    } 
    else if (campoContra.value.length < 6) {
        alert("La contraseña debe tener por lo menos 6 caracteres!")
       
    }


    else {
        localStorage.setItem("email-usuario", correo)
        formulario.submit(); 
        
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
