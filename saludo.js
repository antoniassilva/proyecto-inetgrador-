let userEmail = localStorage.getItem("email-usuario");
let header = document.querySelector("header");

if (userEmail) {
    header.innerHTML = 
    `
    <nav class="navLog letra2">
        <ul>
            <li>
                <p>Bienvenido: ${userEmail}</p>
            </li>
            <li>
                <button id="logout-button">Logout</button>
            </li>
        </ul>
    </nav>
    
    <nav class="navPrincipal">
        <ul class="navegador letra2">
            <li>
                <a class="link" href="./index.html">Home</a>
            </li>
            <li>
                <a class="link" href="./category.html">Electrónica</a>
            </li>
            <li>
                <a class="link" href="./category.html">Accesorios</a> 
            </li>
            <li>
                <a class="link" href="./category.html">Ropa</a>
            </li>
    
        </ul>
        <h1 class="tituloPrincipal letraPrincipal">Compra facil y rapido</h1>
    </nav>
    
    <div class="logo">
        <img class="imagenLogo" src="./IMG/Compra Facil (4).png" alt="logo">
    </div>
    `
}