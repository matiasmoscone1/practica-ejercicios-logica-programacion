

//21. Contar vocales: Escribe una función que tome una cadena de texto
// y devuelva el número de vocales que contiene. Considera tanto las vocales
// en minúsculas como en mayúsculas. Por ejemplo, para la cadena "Hola, cómo estás?", 
//la función debería devolver 7.z

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
        }


        $resultadoVocales.textContent = `Las vocales repetidas son: ${contador}`;
    });



}









