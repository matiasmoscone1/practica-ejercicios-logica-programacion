

//25. Conversión de binario a decimal: Escribe una función que convierta un número binario a decimal.


export default function convertirNumeros(numero, btn, resultado){

    const $btnConversor = document.querySelector(btn);

    const $resultadoConversor = document.querySelector(resultado);


    $btnConversor.addEventListener("click", () => {
        
        const $numeroConvertir = document.querySelector(numero).value;
        let numDecimal = 0;

        let numeroNuevo = $numeroConvertir.split("").reverse().join("");

        for(let i = 0; i < numeroNuevo.length; i++){
            numDecimal = numDecimal + numeroNuevo[i] * 2 ** numeroNuevo.length - 1;
        }

        console.log(numDecimal);

        $resultadoConversor.textContent = `El decimal es: ${numDecimal}`;
        //console.log(numeroNuevo);

    });

}

