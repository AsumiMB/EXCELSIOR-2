document.getElementById("miBoton").addEventListener("mousedown", function() {
    this.style.backgroundColor = "rgba(255, 255, 255, 0.5)"; /* Cambia el color de fondo al presionar */
});

document.getElementById("miBoton").addEventListener("mouseup", function() {
    this.style.backgroundColor = "transparent"; /* Restaura el color de fondo cuando se suelta el botón */
});


