let logoutButton = document.querySelector("#logout-button");

logoutButton.addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.removeItem("email-usuario")
})