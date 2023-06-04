import {
    Proveedor,
    validaTexto,
    obtenerLocalStorage,
    mostrarProveedores,
    guardarLocalStorage,
    currencyFormatter
  } from "./funciones.js";

  document.querySelector('#nav').innerHTML = `

<!--Menu de navegación-->
      <header class="full-width NavBarP container-fluid">
        <div class="full-width NavBarP-Logo">Ejercicio individual 2 M4</div>
        <nav class="full-width NavBarP-Nav">
          <ul class="full-width list-unstyled">
            <li><a href="./proveedor.html">Proveedores</a></li>
            <li><a href="./articulo.html">Articulos</a></li>
          </ul>
        </nav>
      </header>`
  
  let datos1 = obtenerLocalStorage();
  //mostrar datos del localStorage en una tabla
  mostrarProveedores(datos1);
  
  //obtenemos el elemento form del DOM por su "id" y lo 
  //asignamos a la variable form
  let form = document.getElementById("form1");
  
  //se asigna un evento de escucha al elemento (formulario)
  //en este caso es el evento submit, cuando ocurre lo asigna a la funcion,
  // el metodo preventDefault evita que se envie el formulario por defecto.
  form.addEventListener("submit", function (event) {
    event.preventDefault()
    //se definen la variables con los datos capturados del formulario
    let nombre = document.getElementById('input_nombre').value,
      email = document.getElementById('input_email').value,
      telefono = document.getElementById('input_telefono').value;
  
    //validacion de textos ingresados
    if (validaTexto(nombre) && validaTexto(telefono)) {
  
      //se crea una instancia del objeto Empresa y se le agregan los datos capturados
      //por el formulario
      let nuevoProveedor = new Proveedor(nombre, email, telefono, []);
  
      //se agrega la nueva empresa a un arreglo con nuevos datos 
      //let datos = ({
      //   id: nuevaEmpresa.id,
      //   nombre: nuevaEmpresa.nombre,
      //   rut: nuevaEmpresa.rut,
      //   importacion: [],
      // });
  
      //se limpia el formulario
      form.reset();
  
      // se aguardan los datos en local storage
       guardarLocalStorage(nuevoProveedor);
  
      //se obtiene los datos desde el local Storage
       let data = obtenerLocalStorage();
  
      mostrarProveedores(data);
    }  
  
  });