let campoEmail = document.querySelector('#email');
let campoContra = document.querySelector('#contra');
let campoRepe = document.querySelector('#repe');
let campoTerminos = document.querySelector('#terminos');

let formulario = document.querySelector('form');
console.log(campoTerminos)


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (campoEmail.value === '') {
        alert("Por favor complete el campo correo!");
    } 
    else if (campoContra.value === '') {
        alert("Por favor complete el campo contraseña!");
    } 
    else if (campoContra.value.length < 6) {
        alert("La contraseña debe tener por lo menos 6 caracteres!");
    } 
    else if (campoRepe.value !== campoContra.value) {
        alert("Las Contraseñas no coinciden!");
    } 
    else if (campoTerminos.value == "no") {
        alert("Acepte los términos y condiciones");
    } 
    else {
        formulario.submit(); 
        window.location.href = "./login.html"; 
    }
});