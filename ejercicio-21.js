

//21. Contar vocales: Escribe una función que tome una cadena de texto
// y devuelva el número de vocales que contiene. Considera tanto las vocales
// en minúsculas como en mayúsculas.


export default function contarVocales(oracion, btn, resultado){


    const $btnVocales = document.querySelector(btn);
    const $resultadoVocales = document.querySelector(resultado);

    $btnVocales.addEventListener("click", () => {
        let contador = 0;
        const $oracion = document.querySelector(oracion).value;
        
        console.log($oracion);

        for(let i = 0; i < $oracion.length; i++){
            if($oracion[i] === "a" || $oracion[i] === "e" || $oracion[i] === "i" || $oracion[i] === "u" || $oracion[i] === "o"){
                contador += 1;
            }
            if($oracion[i] === "A" || $oracion[i] === "E" || $oracion[i] === "I" || $oracion[i] === "U" || $oracion[i] === "O"){
                contador += 1;
            }
        }


        $resultadoVocales.textContent = `Las vocales repetidas son: ${contador}`;
    });



}









