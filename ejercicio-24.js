

//24. Palabras más largas: Escribe un programa que encuentre las palabras más largas en una frase.


export default function palabraLarga(oracion, btn, resultado){

    const $btnPlabraLarga = document.querySelector(btn);

    const $resultadoPalabraLarga = document.querySelector(resultado);

    $btnPlabraLarga.addEventListener("click", () => {

        const $oracionPalabraLarga = document.querySelector(oracion).value;

        console.log($oracionPalabraLarga);

        
    });


}


