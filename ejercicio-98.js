

//98. Promesa que resuelve después de un tiempo: Crea una función que devuelve una promesa 
//que se resuelve después de un cierto tiempo (por ejemplo, 2 segundos). Luego, usa 
//async/await para esperar la resolución de la promesa y mostrar un mensaje cuando se complete.

export default function devolverPromesa(input, btnComenzar, btnLimpiar, resultado){


    const $btnComenzar = document.querySelector(btnComenzar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    const creaPromesa = (texto) => {$resultado.textContent = `El resultado es: ${texto}`}


    $btnComenzar.addEventListener("click", () => {
        const $inputText = document.querySelector(input).value;

        creaPromesa($inputText);

    });


}

