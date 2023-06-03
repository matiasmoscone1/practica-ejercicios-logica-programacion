

//24. Palabras más largas: Escribe un programa que encuentre las palabras más largas en una frase.


export default function palabraLarga(oracion, btn, resultado){

    const $btnPlabraLarga = document.querySelector(btn);

    const $resultadoPalabraLarga = document.querySelector(resultado);

    $btnPlabraLarga.addEventListener("click", () => {

        const $oracionPalabraLarga = document.querySelector(oracion).value;

        
        const arrayPalabraLarga = $oracionPalabraLarga.split(" ");

        console.log(arrayPalabraLarga);

        let palabraLarga = "";

        for(let i = 0; i < arrayPalabraLarga.length; i++){
            if(arrayPalabraLarga[i].length > arrayPalabraLarga.length){
                palabraLarga = arrayPalabraLarga[i];
            }
        }
        
        console.log(palabraLarga);
    });


}


