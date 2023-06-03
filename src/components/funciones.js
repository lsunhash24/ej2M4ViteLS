//se crea instancias de ventana modal
export var ventana = bootstrap.Modal.getOrCreateInstance(myModal);

//se declara variables con el texto del cuerpo de la modal
export var parrafo = document.getElementById("txt");

//funcion que formatea los valores numericos
export function currencyFormatter({ currency, value}) {
    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      minimumFractionDigits: 0,
      currency
    }) 
    return formatter.format(value)
}
//se crea la clase Proveedor
export class Proveedor {

  constructor(nombre, email, telefono, articulo){
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
      this.articulo = articulo || [];
  }
//metodo que devuelve nombre y telefono del proveedor
  getInfoProveedor() {
    return `Nombre Proveedor: ${this.nombre}
            Teléfono: ${this.telefono} `
  }

 // metodo que agrega articulo a proveedor
   agregarArticulo(articulo) {
    this.articulo.push(articulo);
  }
 // metodos getter y setter  
  get _nombre(){
    return this.nombre
}
  get _email(){
      return this.email
  }

  get _telefono(){
      return this.telefono
  }
   get _articulo(){
     return this.articulo
   }

  set _nombre(nuevo_nombre) {
    this.nuevo_nombre = nuevo_nombre
  }

  set _email(nuevo_email){
    this.nuevo_email = nuevo_email
  }

  set _rut(nuevo_telefono){
    this.nuevo_telefono = nuevo_telefono
  }

 set _articulo(nuevo_articulo){
     this.nuevo_articulo = nuevo_articulo
   }

}
//se defina la clase Articulo
export class Articulo {

  constructor(nombreArticulo,precio){
      this.nombreArticulo = nombreArticulo
      this.precio = precio;
  
  }
  //getter y setter 
  get _nombreArticulo(){
    return this.nombreArticulo
  }
  get _precio(){
    return this.precio
  }

  set _nombreArticulo(nuevo_nombreArticulo){
    this.nuevo_nombreArticulo = nuevo_nombreArticulo
  }
  set _precio(nuevo_precio){
    this.nuevo_precio = nuevo_precio
  }
}

//funciÃ³n que valida input tipo texto
export const validaTexto = (texto) => {
if( texto == null || texto.length == 0 || /^\s+$/.test(texto) ) { 
    parrafo.innerHTML = "Ingrese datos validos";
    ventana.show();
    return false;
    }else {
    return true;
    }
}

//funcion que valida input tipo numerico
export const validaNumero = (numero) => {
if( numero == null || numero.length == 0 || /^\s+$/.test(numero) ) { return false;}
}
//funcion que actualiza datos en localStorage
  export const actualizarLocalStorage = (datos) => {
    let dataParse =  localStorage.setItem('data2', JSON.stringify(datos));
    return dataParse
  }

 //funciÃ³n que obtiene los datos del local Storage
  export const obtenerLocalStorage = () => {
    let dataParse = JSON.parse(localStorage.getItem('data2')) || [];
    return dataParse
  }
//funcion para guardar datos en el local storage
export const guardarLocalStorage = (arr) => {
  let obtenerLocal = obtenerLocalStorage();
  let arregloActual = obtenerLocal.concat(arr);
  localStorage.setItem('data2', JSON.stringify(arregloActual));

}

export const actualizarLocalStorageArt = () => {
  let dataParse2 = JSON.parse(localStorage.getItem('articulos')) || [];
  return dataParse2
}

//funciÃ³n que obtiene los datos del local Storage de la data impor
export const obtenerLocalStorageArt = () => {
  let dataParse2 = JSON.parse(localStorage.getItem('articulos')) || [];
  return dataParse2
}
//funcion para guardar datos en el local storage de la data impor
export const guardarLocalStorageArt = (arr) => {
let obtenerLocal2 = actualizarLocalStorageArt();
let arregloActual2 = obtenerLocal2.concat(arr);
localStorage.setItem('articulos', JSON.stringify(arregloActual2));

}
// funcion jquery que muestra a las empresas en una tabla
export const mostrarProveedores = (data) => {

        $('#myTabla').DataTable({
          paging: true,
          searching: true,
          language: {
            "decimal": "",
            "emptyTable": "No hay informaciÃ³n",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
              "first": "Primero",
              "last": "Ultimo",
              "next": "Siguiente",
              "previous": "Anterior"
            }
          },
          data: data,
             "columns": [
             {
               title: "Nombre",
               "data": "nombre",
             },
            {
              title: "email",
              "data": "email",
            },
          
            {
              title: "Telefono",
              "data": "telefono",
            },
            //{
            //   title: "NÂ° Importaciones",
            //   "data": "importacion.length",

            // },
            {
              title: "Accion",
              "defaultContent": "<button>Imp</button>",
            },
          ],
          //se agrega un boton al final de la fila para mostrar
          //las importaciones por empresa
          columnDefs: [
            { targets: 3, visible: true },
            {
                targets: -1,
                orderable: false,
                data: null,
                render: function (data) {
                    let datos = data;
                    let botones = `
                            <button class='btn btn-info btn-circle'
                                onclick='$("#txt").text("Informacion Proveedor: Nombre: ${datos.nombre}, Telefono: ${datos.telefono}")
                                $("#myModal").modal("show");' style="font-size:16px;">
                                <i class="fa-regular fa-file-lines" style="font-size:12px;"></i> Ver Datos
                            </button>`;
                    return botones;
                }
            }
          ],
          "bDestroy": true
    });

}  
//funcion jquery que muestra datos de importacion en una 
//tabla 
export const mostrarArticulos = (data) => {

  $('#myTabla2').DataTable({
    paging: true,
    searching: true,
    language: {
      "decimal": "",
      "emptyTable": "No hay informaciÃ³n",
      "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
      "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
      "infoFiltered": "(Filtrado de _MAX_ total entradas)",
      "infoPostFix": "",
      "thousands": ",",
      "lengthMenu": "Mostrar _MENU_ Entradas",
      "search": "Buscar:",
      "zeroRecords": "Sin resultados encontrados",
      "paginate": {
        "first": "Primero",
        "last": "Ultimo",
        "next": "Siguiente",
        "previous": "Anterior"
      }
    },
    data: data,
        "columns": [{
        title: "Artículo",
        "data": "nombreArticulo",
      },
      {
        title: "Precio",
        "data": "precio",
      },
      
    ],
    
    "bDestroy": true
});

}  
