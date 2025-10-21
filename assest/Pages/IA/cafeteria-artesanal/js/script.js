// Selecciona el botón
const botonColor = document.getElementById('cambiarColor');

// Lista de colores para alternar
const colores = ['#f5f2e9', '#e0c097', '#d7ccc8', '#fff3e0', '#ffe0b2'];
let indice = 0;

// Evento para cambiar el color de fondo
botonColor.addEventListener('click', () => {
  indice = (indice + 1) % colores.length;
  document.body.style.backgroundColor = colores[indice];
});
