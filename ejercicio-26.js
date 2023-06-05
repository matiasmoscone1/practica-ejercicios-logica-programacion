


//26. Verificación de números perfectos: Escribe una función que
//determine si un número dado es un número perfecto.


//Un número perfecto es un número entero 
//positivo que es igual a la suma de sus divisores propios positivos.


export default function numeroPerfecto(numero, btn, resultado){

    const $btnNumeroPerfecto = document.querySelector(btn);
    const $resultadoNumeroPerfecto = document.querySelector(resultado);

    $btnNumeroPerfecto.addEventListener("click", () => {
        const $numeroInput = document.querySelector(numero).value;

        
        let numeroPerfecto = (2 ** ($numeroInput - 1)) * ((2 ** $numeroInput) - 1); 

        
        console.log(numeroPerfecto);


    });



}