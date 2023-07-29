

//58. Simulador de carrito de compras: Crea un simulador de carrito de compras donde el 
//usuario pueda agregar productos, ver el total, aplicar descuentos

export default function carritoCompras(btnAgregar1, btnAgregar2, btnAgregar3, btnDescuento1, btnDescuento2, btnDescuento3, resultado){

    const $resultado = document.querySelector(resultado);

    let total = 0;
    let cantidad = 0;
    let calculoDesc = 0;

    document.addEventListener("click", (e) => {

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

        console.log(total);
        //console.log(cantidad);
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

    });

}


