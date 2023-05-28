

//21. Contar vocales: Escribe una función que tome una cadena de texto
// y devuelva el número de vocales que contiene. Considera tanto las vocales
// en minúsculas como en mayúsculas.


export default function contarVocales(oracion, btn, resultado){

    //Creando variables del DOM
    const $btnVocales = document.querySelector(btn);
    const $resultadoVocales = document.querySelector(resultado);

    //Captando evento click del boton para contar vocales
    $btnVocales.addEventListener("click", () => {
        //Creando variable contador que sumara cuando encuentre una vocal 
        let contador = 0;
        //Creando variable del DOM y captando el valor que el usuario escribe por teclado en el input
        const $oracion = document.querySelector(oracion).value;
        
        //console.log($oracion);

        //Recorriendo la oracion y comparando si hay vocales, suma el contador en 1.
        for(let i = 0; i < $oracion.length; i++){
            if($oracion[i] === "a" || $oracion[i] === "e" || $oracion[i] === "i" || $oracion[i] === "u" || $oracion[i] === "o"){
                contador += 1;
            }
            if($oracion[i] === "A" || $oracion[i] === "E" || $oracion[i] === "I" || $oracion[i] === "U" || $oracion[i] === "O"){
                contador += 1;
            }
        }

        //Muestra el resultado por pantalla
        $resultadoVocales.textContent = `Las vocales repetidas son: ${contador}`;
    });



}









