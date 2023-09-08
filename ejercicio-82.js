

//82. Define una clase TiendaOnline con métodos para agregar productos al carrito, 
//calcular el total y realizar un pedido.


export default function tiendaOnline(nombre, precio, btnAgregar, lista, btnCalcular, btnLimpiar, resultado){

    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    const $lista = document.querySelector(lista);


    class TiendaOnline{
        constructor(){
            this.carrito = [];
            this.total = 0;
        }

        agregarCarrito(producto){
            this.carrito.push(producto);
        }

        calcularTotal(){
            this.carrito.map((producto) => {
                this.total += parseFloat(producto.precio);
                console.log(this.total);
                return(this.total);
            })
        }

    }



    const instanciaTienda = new TiendaOnline;

    $btnAgregar.addEventListener("click", () => {
        const $nombre = document.querySelector(nombre).value;
        const $precio = document.querySelector(precio).value;
    
        let nuevoProducto = {nombre: $nombre, precio: $precio};

        instanciaTienda.agregarCarrito(nuevoProducto);

        
        $lista.innerHTML = `${instanciaTienda.carrito.map((producto) => `<div>Precio: ${producto.nombre} Precio: ${producto.precio}`).join("")}`;

        console.log(instanciaTienda.carrito);
    });

    $btnCalcular.addEventListener("click", () => {
  
        $resultado.textContent = `Total: ${instanciaTienda.calcularTotal()}`;


    });

}




