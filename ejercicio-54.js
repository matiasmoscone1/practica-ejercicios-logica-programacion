

//54. Generador de tarjetas de crédito: Desarrolla una función que genere números de 
//tarjetas de crédito válidos y aleatorios, teniendo en cuenta las reglas de 
//validación de números de tarjetas (16 numeros separados en 4 grupos de 4)

export default function generadorTarjetasCredito(btnGenerar, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    //Captando evento click del boton Generar
    $btnGenerar.addEventListener("click", () => {
        //inicializando la variable de tipo STRING que contendra el numero de la tarjeta
        let numeroTarjeta = "";

        //creando ciclo for que recorra 16 veces y genere un numero aleatorio esas 16 veces
        for(let i = 0; i < 16; i++){
            //cada 4 numeros generados, que genere un espacio en blanco asi cumple con los
            //requisitos y estandares de formato de las tarjetas de credito
            if(i === 4 || i === 8 || i === 12){
                //le agrega el espacio en blanco generado
                numeroTarjeta += " ";
            }
            //Genera el numero aleatorio
            numeroTarjeta += Math.floor(Math.random() * 9);
        }

        //Muestra el resultado en el DOM
        $resultado.textContent = `El numero de la tarjeta generado es: ${numeroTarjeta}`;
        //console.log(numeroTarjeta);
    });

    //Captando el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el resultado del DOM
        $resultado.textContent = "";
    });

}

