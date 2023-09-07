

//82. Define una clase TiendaOnline con métodos para agregar productos al carrito, 
//calcular el total y realizar un pedido.


export default function tiendaOnline(nombre, precio, btnAgregar, lista, btnCalcular, resultado, btnLimpiar){

    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    class TiendaOnline{
        constructor(){
            this.carrito = [];
        }

        agregarCarrito(producto){
            this.carrito.push(producto);
        }

    }


    const instanciaTienda = new TiendaOnline;

    $btnAgregar.addEventListener("click", () => {
        const $nombre = document.querySelector(nombre).value;
        const $precio = document.querySelector(precio).value;
    
        let nuevoProducto = {nombre: $nombre, precio: $precio};

        instanciaTienda.agregarCarrito(nuevoProducto);
    
        console.log(instanciaTienda.carrito);
    });



}




