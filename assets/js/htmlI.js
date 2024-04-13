document.getElementById('mostrarLogin').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
});
// Obtener el botón por su ID
var boton = document.getElementById('mostrarLogin');

// Agregar un evento de clic al botón
boton.addEventListener('click', function() {
    // Redirigir a otra página
    window.location.href = 'index.html';
});
