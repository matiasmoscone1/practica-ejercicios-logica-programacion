

//82. Define una clase TiendaOnline con métodos para agregar productos al carrito, 
//calcular el total y realizar un pedido.


export default function tiendaOnline(nombre, precio, btnAgregar, lista, btnCalcular, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    const $lista = document.querySelector(lista);

    //creando clase 
    class TiendaOnline{
        //agregando propiedades, carrito un array donde se almacenaran los productos agregados
        //total donde almacenara el valor total a pagar de todos los productos agregados
        constructor(){
            this.carrito = [];
            this.total = 0;
        }

        //creando metodo para agregar un producto al carrito
        //producto (objeto), se agrega al array carrito mediante .push
        agregarCarrito(producto){
            this.carrito.push(producto);
        }

        //calcula el monto total, recorre el array de productos y por cada producto
        //toma el precio del mismo y lo almacena en la propiedad total
        calcularTotal(){
            this.carrito.map((producto) => {
                this.total += parseFloat(producto.precio);
                //console.log(this.total);
                //devuelve el valor total
                return(this.total);
            })
        }

        //metodo limpiar, recorre todo el array y por cada producto, lo elimina del array
        limpiarCarrito(){
            this.carrito.map((producto) => {
                this.carrito.splice(producto);
            });
            //setea nuevamente el total en 0
            this.total = 0;
        }


    }

    //creando instancia de la clase TiendaOnline
    const instanciaTienda = new TiendaOnline;

    //captando evento click del boton Agregar
    $btnAgregar.addEventListener("click", () => {
        //toma el valor de los inputs del usuario
        const $nombre = document.querySelector(nombre).value;
        const $precio = document.querySelector(precio).value;
    
        //creando el nuevo producto con el nombre y el precio de los valores de los inputs
        let nuevoProducto = {nombre: $nombre, precio: $precio};

        //agregando el producto a traves del metodo agregarCarrito, al array
        instanciaTienda.agregarCarrito(nuevoProducto);

        //mostrando en el Dom el producto agregado
        $lista.innerHTML = `${instanciaTienda.carrito.map((producto) => `<div>Nombre: ${producto.nombre} - Precio: $${producto.precio}`).join("")}`;

        //console.log(instanciaTienda.carrito);
    });

    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
        //calcula el monto total de todos los productos del carrito
        instanciaTienda.calcularTotal();
        //mostrando el monto total en el DOM
        $resultado.textContent = `Total: $${instanciaTienda.total}`;
    
    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM y los inputs
        $lista.innerHTML = "";
        $resultado.textContent = "";
        document.querySelector(nombre).value = "";
        document.querySelector(precio).value = "";
        //llama al metodo limpiarCarrito para que elimine todos los productos del array
        //y para que setee el valor total nuevamente a 0.
        instanciaTienda.limpiarCarrito();

    });


}




