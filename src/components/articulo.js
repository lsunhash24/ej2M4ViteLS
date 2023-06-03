import {
    Articulo,
    validaTexto,
    obtenerLocalStorageArt,
    mostrarArticulos,
    guardarLocalStorageArt,
    currencyFormatter
  } from "./funciones.js";
  
  let articulos = obtenerLocalStorageArt();
  //mostrar datos del localStorage en una tabla
  mostrarArticulos(articulos);
  
  //obtenemos el elemento form del DOM por su "id" y lo 
  //asignamos a la variable form
  let form = document.getElementById("form2");
  
  //se asigna un evento de escucha al elemento (formulario)
  //en este caso es el evento submit, cuando ocurre lo asigna a la funcion,
  // el metodo preventDefault evita que se envie el formulario por defecto.
  form.addEventListener("submit", function (event) {
    event.preventDefault()
    //se definen la variables con los datos capturados del formulario
    let producto = document.getElementById('input_producto').value,
        precio = document.getElementById('input_precio').value,
        proveedor = document.getElementById('input_proveedor').value;
  
    //validaciÃ³n de textos ingresados
    if (validaTexto(producto) && validaTexto(proveedor)) {
  
      //se crea una instancia del objeto Empresa y se le agregan los datos capturados
      //por el formulario
      let nuevoArticulo = new Articulo(producto, precio);
  
      //se agrega la nueva empresa a un arreglo con nuevos datos 
      //let datos = ({
      //   id: nuevaEmpresa.id,
      //   nombre: nuevaEmpresa.nombre,
      //   rut: nuevaEmpresa.rut,
      //   importacion: [],
      // });
  
      //se limpia el formulario
      //  form.reset();
  
      // se aguardan los datos en local storage
       guardarLocalStorageArt(nuevoArticulo);
  
      //se obtiene los datos desde el local Storage
       let articulos = obtenerLocalStorageArt();
  
      mostrarArticulos(articulos);
    }  
  
  });