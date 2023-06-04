

//25. Conversión de binario a decimal: Escribe una función que convierta un número binario a decimal.


export default function convertirNumeros(numero, btn, resultado){

    //Creando variables del DOM
    const $btnConversor = document.querySelector(btn);
    const $resultadoConversor = document.querySelector(resultado);

    //Captando evento click del boton Convertir
    $btnConversor.addEventListener("click", () => {

        //Captando valor del input escrito por usuario
        const $numeroConvertir = document.querySelector(numero).value;

        //Creando variable del numero decimal y convirtiendo el numero al revez para calcular
        let numDecimal = 0;
        let numeroNuevo = $numeroConvertir.split("").reverse().join("");

        //Ciclo for que itera tantas veces como numeros tenga el binario
        //Guarda en una variable el numero multiplicado por 2 y elevado a su respectiva posicion
        for(let i = 0; i < numeroNuevo.length; i++){
            numDecimal = numDecimal + numeroNuevo[i] * 2 ** (numeroNuevo.length - 1 - i);
        }

        //console.log(numDecimal);

        //Muestra por el DOM el resultado
        $resultadoConversor.textContent = `El decimal es: ${numDecimal}`;
        //console.log(numeroNuevo);

    });

}

