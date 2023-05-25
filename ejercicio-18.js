

//18. Ordenar palabras: Escribe una función que tome una cadena de palabras separadas por espacios y las devuelva en orden alfabético.

export default function ordenarPalabras(oracion, btn, resultado){

    //Inicializando variables del DOM
    const $btnOrdenar = document.querySelector(btn);
    const $resultadoOrdenar = document.querySelector(resultado);

    //Captando evento click del boton ordenar
    $btnOrdenar.addEventListener("click", () => {
        //Tomando el valor del input que escribe la oracion el usuario
        const $oracion = document.querySelector(oracion).value;
        //console.log($oracion);

        //Codigo que ordena alfabeticamente la oracion
        //Primero convierte en array la oracion y separa por "espacios", luego ordena el array 
        //y para terminar junta de nuevo el array en una oracion separando con espacios las palabras
        let arrayOracion = $oracion.split(" ").sort().join(" ");
        //console.log(arrayOracion);

        //Mostrando resultado en el DOM
        $resultadoOrdenar.textContent = `La oracion ordenada es: "${arrayOracion}"`;
    })



}


