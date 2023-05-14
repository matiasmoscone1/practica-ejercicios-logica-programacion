

//14. Escribir un programa que determine si un año ingresado por el usuario es bisiesto o no.
// Un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400.

export default function determinarBisiesto(numeroAnio, btn ,resultado){


    
    const $btnBisiesto = document.querySelector(btn);
    const $resultado = document.querySelector(resultado);

    $btnBisiesto.addEventListener("click", () => {
        const $numero = document.querySelector(numeroAnio).value;

        if($numero % 4 === 0 && !($numero % 100 === 0)){
            $resultado.textContent = `El año ${$numero} es Bisiesto`;
        }else{
            $resultado.textContent = `El año ${$numero} NO es Bisiesto`;
        }



    });




}
























