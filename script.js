// Récupérez le bouton et l'élément de message par leur ID
const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

// Ajoutez un gestionnaire d'événements pour le bouton
helloButton.addEventListener("click", () => {
    // Affichez "Hello David" dans l'élément de message
    message.textContent = "Hello David";
});
