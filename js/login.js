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