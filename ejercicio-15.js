


//15. Escribir un programa que determine el número de días entre dos fechas ingresadas por el usuario.


export default function determinarDias(inputA, inputB, btn, resultado){

    //Referenciando variables del DOM 
    const $btnDias = document.querySelector(btn);

    const $resultado = document.querySelector(resultado);
    //Captando evento click del boton para verificar dias 
    $btnDias.addEventListener("click", () => {
        //Sacando el valor de los inputs del DOM que puso las fechas el usuario
        const $valorA = new Date(document.querySelector(inputA).value);
        const $valorB = new Date(document.querySelector(inputB).value);
        
        //Calculando la diferencia en milisegundos
        const dias =  $valorB.getTime() - $valorA.getTime();
        //Explayando el resultado en formato dias.
        $resultado.textContent = `La diferencia son: ${dias / (1000 * 60 * 60 * 24)} dias`;

        //console.log($valorA, $valorB);


    });









}




