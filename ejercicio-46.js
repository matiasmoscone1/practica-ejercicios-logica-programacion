



//46. Crear una función que tome un número entero como parámetro y devuelva su 
//representación binaria.


export default function convertirDecimalABinario(inputNumero, btnConvertir, btnLimpiar, resultado){

    //Creando variables del DOM
    const $btnConvertir = document.querySelector(btnConvertir);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton Convertir
    $btnConvertir.addEventListener("click", () => {
        //tomando por parametro el valor del input del usuario
        const $inputNumero = document.querySelector(inputNumero).value;
    
        //Creando variable decimal que almacena lo q puso en el input el usuario y creando variable
        //binario como una cadena vacia
        let decimal = $inputNumero;
        let binario = "";

        //console.log($inputNumero);

        //bucle que se ejecuta hasta que la variable decimal sea 0
        while(decimal > 0){
            //crea el residuo y le almacena el valor
            let residuo = decimal % 2;
            //concatena a la cadena "binario" el residuo que va dejando la operacion
            binario += residuo;
            //asigna a la variable decimal el resultado de dividirlo por 2
            decimal = Math.floor(decimal / 2);
        }

        //junta todo y lo transforma en una cadena de numeros
        binario.split("").reverse().join("");

        //console.log(binario);

        //Muestra el resultado por pantalla
        $resultado.innerHTML = `El binario es: ${binario}`;


    });

    //Captando el evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el resultado de la pantalla
        $resultado.innerHTML = "";
    });


}







