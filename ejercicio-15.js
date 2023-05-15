


//15. Escribir un programa que determine el número de días entre dos fechas ingresadas por el usuario.


export default function determinarDias(inputA, inputB, btn, resultado){


    const $btnDias = document.querySelector(btn);

    const $resultado = document.querySelector(resultado);

    $btnDias.addEventListener("click", () => {
        const $valorA = new Date(document.querySelector(inputA).value);
        const $valorB = new Date(document.querySelector(inputB).value);
    
        const dias =  $valorB.getTime() - $valorA.getTime();

        $resultado.textContent = `La diferencia son: ${dias / (1000 * 60 * 60 * 24)} dias`;

        //console.log($valorA, $valorB);


    });









}




