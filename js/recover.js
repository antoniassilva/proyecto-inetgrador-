let campoEmail = document.querySelector('#email');

let campoTerminos = document.querySelector('#terminos');

let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (campoEmail.value === '') {
        alert("Por favor complete el campo correo!");
    } 
    
    else if (campoTerminos.value == "no") {
        alert("Acepte los términos y condiciones");
    } 
    else {
       
        formulario.submit(); 
        alert("Recibiras un mail con las instrucciones para recuperar tu contraseña")
        window.location.href = "./login.html"; 
    }
});