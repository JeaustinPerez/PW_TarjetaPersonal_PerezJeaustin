const tarjeta = document.getElementById('tarjeta');
const boton = document.getElementById('botonTema');

boton.addEventListener('click', () => {
  if(tarjeta.classList.contains('claro')){
    tarjeta.classList.remove('claro');
    tarjeta.classList.add('oscuro');
  } else {
    tarjeta.classList.remove('oscuro');
    tarjeta.classList.add('claro');
  }
});




document.getElementById("miBoton").addEventListener("click", function() {
  document.querySelector(".intereses").classList.toggle("oculto");
});