

//58. Simulador de carrito de compras: Crea un simulador de carrito de compras donde el 
//usuario pueda agregar productos, ver el total, aplicar descuentos

export default function carritoCompras(btnAgregar1, btnAgregar2, btnAgregar3, btnDescuento1, btnDescuento2, btnDescuento3, resultado, btnLimpiar){

    //Creando variable referencial al DOM de resultado
    const $resultado = document.querySelector(resultado);

    //creando variables que seran utilizadas para calcular descuentos y total
    let total = 0;
    let cantidad = 0;
    let calculoDesc = 0;

    //Captando evento click del DOM
    document.addEventListener("click", (e) => {

        //Si coincide con algun boton agregar, sumarlo al monto total y 1 mas de cantidad
        if(e.target.matches(btnAgregar1)){
            total = total + 190;
            cantidad++;
        }
        if(e.target.matches(btnAgregar2)){
            total = total + 300;
            cantidad++;
        }
        if(e.target.matches(btnAgregar3)){
            total = total + 650;
            cantidad++;
        }

        //Actualizando la cantidad de celulares en la tabla del DOM
        document.querySelector(".cantidad-ej-58").textContent = `${cantidad}`;

        //console.log(total);
        //console.log(cantidad);
        //Si coincide con algun boton descuento, que haga el calculo especifico del boton
        if(e.target.matches(btnDescuento1)){
            calculoDesc = total * 10 / 100;
            total = total - calculoDesc;
            //console.log(total);
        }
        if(e.target.matches(btnDescuento2)){
            calculoDesc = total * 20 / 100;
            total = total - calculoDesc;
            //console.log(total);
        }
        if(e.target.matches(btnDescuento3)){
            calculoDesc = total * 30 / 100;
            total = total - calculoDesc;
            //console.log(total);
        }

        //Mostrando resultado en el DOM
        $resultado.textContent = `El total es: $${total}`;

        //Si el evento click coincide con el boton limpiar
        if(e.target.matches(btnLimpiar)){
            //Limpia el resultado del DOM, la cantidad en la tabla y vuelve las variables
            //iniciales a 0
            $resultado.textContent = " ";
            document.querySelector(".cantidad-ej-58").textContent = " ";
            total = 0;
            cantidad = 0;
            calculoDesc = 0;
        }

    });

}


