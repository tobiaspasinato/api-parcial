document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton1").addEventListener("click", () => {
        console.log("Botón 1 pulsado");
        window.alert("¡Hola! Esta es una alerta.");
    });

    document.getElementById('boton2').addEventListener('click', () => {
        alert('Botón 2 pulsado');
    });

    document.getElementById('boton3').addEventListener('click', () => {
        alert('Botón 3 pulsado');
    });
});

