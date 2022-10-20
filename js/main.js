function contentLoaded() {

  // Capturar los elementos del DOM
  let cantidad = document.getElementById("cantidad");
  let categoria = document.getElementById("categoria");

  let total = document.getElementById("total");

  // let btnBorrar = document.getElementById("btn-borrar");
  let btnResumen = document.getElementById("btn-resumen");

  // Definir variables a utilizar
  let ticketValorTotal = 200;

  // Aplicar el descuento según categoría
  function aplicarDescuento(event) {
    
    let totalConDescuento;
    if(categoria.value == "estudiante") {
      // Estudiantes: se descuenta 80%
      totalConDescuento = (ticketValorTotal - (ticketValorTotal * .8)) * cantidad.value;
    } else if(categoria.value == "trainee") {
      // Trainee: se descuenta 50%
      totalConDescuento = (ticketValorTotal - (ticketValorTotal * .5)) * cantidad.value;
    } else if(categoria.value == "junior") {
      // Junior: se descuenta 20%
      totalConDescuento = (ticketValorTotal - (ticketValorTotal * 0.2)) * cantidad.value;
    } else {
      // Si no se seleccionó ningún descuento:
      totalConDescuento = 200 * cantidad.value;
    }

    total.value = "Total a Pagar: $" + totalConDescuento;
  }

  btnResumen.addEventListener("click", aplicarDescuento);

}