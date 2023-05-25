

//18. Ordenar palabras: Escribe una función que tome una cadena de palabras separadas por espacios y las devuelva en orden alfabético.

export default function ordenarPalabras(oracion, btn, resultado){


    const $btnOrdenar = document.querySelector(btn);
    const $resultadoOrdenar = document.querySelector(resultado);

    $btnOrdenar.addEventListener("click", () => {
        const $oracion = document.querySelector(oracion).value;
        //console.log($oracion);

        let arrayOracion = $oracion.split(" ").sort();
        console.log(arrayOracion);

        

    })



}


