

//54. Generador de tarjetas de crédito: Desarrolla una función que genere números de 
//tarjetas de crédito válidos y aleatorios, teniendo en cuenta las reglas de 
//validación de números de tarjetas (16 numeros separados en 4 grupos de 4)

export default function generadorTarjetasCredito(btnGenerar, btnLimpiar, resultado){

    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    $btnGenerar.addEventListener("click", () => {
        let numeroTarjeta = "";

        for(let i = 0; i < 16; i++){
            if(i === 4 || i === 8 || i === 12){
                numeroTarjeta += " ";
            }
            numeroTarjeta += Math.floor(Math.random() * 9);
        }

        console.log(numeroTarjeta);
        
        
    });



}

