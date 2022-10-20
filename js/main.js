function contentLoaded() {

  let tickets = document.getElementById("tickets");

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
      // Estudiantes: se descuenta 80% (el valor del ticket es el 20% del original)
      totalConDescuento = ticketValorTotal * cantidad.value * .2; 
    } else if(categoria.value == "trainee") {
      // Trainee: se descuenta 50% (el valor del ticket es el 50% del original)
      totalConDescuento = ticketValorTotal * cantidad.value * .5; 
    } else if(categoria.value == "junior") {
      // Junior: se descuenta 20% (el valor del ticket es el 80% del original)
      totalConDescuento = ticketValorTotal * cantidad.value * .8; 
    } else {
      // Si no se seleccionó ningún descuento:
      totalConDescuento = 200 * cantidad.value;
    }

    total.value = "Total a Pagar: $" + totalConDescuento;
  }

  btnResumen.addEventListener("click", aplicarDescuento);

  // Mostrar popup al comprar los tickets
  let discountForm = document.getElementById("discount-form");
  let required = document.getElementById("discount-form").querySelectorAll("[required]");

  let popup = document.getElementById("popup");
  let btnComprar = document.getElementById("btn-comprar");
  let btnCerrar = document.getElementById("btn-cerrar");

  btnComprar.addEventListener("click", function(e) {
    let valid = true;
    required.forEach(function(i) {
      if(!i.value) {
        valid = false;
        return;
      } 
    });
    if(valid) {
      popup.classList.add("active"); 
    } else {
      alert("Por favor, completá todos los campos");
    }
  });

  btnCerrar.addEventListener("click", function(e) {
    // Escondo el Pop-Up
    popup.classList.remove("active");
    // Elimino los datos del formulario
    discountForm.reset();
  })
}