// mensaje bienvenida
alert("Bienvenido a mi portafolio");

// cambiar texto
const botonTexto = document.getElementById("btn-texto");
const texto = document.getElementById("texto");

botonTexto.addEventListener("click", function() {
  texto.textContent = "Ahora el texto cambió con JavaScript";
});

// mostrar/ocultar mensaje
const botonMostrar = document.getElementById("btn-mostrar");
const mensaje = document.getElementById("mensaje");

botonMostrar.addEventListener("click", function() {
  if (mensaje.style.display === "none") {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
});

const btnSaludo = document.getElementById("btn-saludo");
const saludo = document.getElementById("saludo");

if (btnSaludo) {
  btnSaludo.addEventListener("click", function() {
    saludo.textContent = "¡Hola! Estas son mis mascotas 🐾";
  });
}