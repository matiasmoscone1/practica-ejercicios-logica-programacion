

//24. Palabras más largas: Escribe un programa que encuentre las palabras más largas en una frase.


export default function palabraLarga(oracion, btn, resultado){

    //Creando variables del DOM
    const $btnPlabraLarga = document.querySelector(btn);

    const $resultadoPalabraLarga = document.querySelector(resultado);

    //Captando evento click del dom
    $btnPlabraLarga.addEventListener("click", () => {

        //Captando la oracion completa escrita por el usuario
        const $oracionPalabraLarga = document.querySelector(oracion).value;
        
        //Convirtiendo esa oracion en un array de palabras separadas por espacio        
        const arrayPalabraLarga = $oracionPalabraLarga.split(" ");

        //console.log(arrayPalabraLarga);

        //inicializando lo que determinara el resultado
        let palabraLarga = "";

        //Ciclo for que itera tantas veces como palabras tenga el array creado anteriormente
        for(let i = 0; i < arrayPalabraLarga.length; i++){
            //Condicional que determina la palabra de mayor longitud y la guarda en la variable creada antes
            if(arrayPalabraLarga[i].length > arrayPalabraLarga.length){
                palabraLarga = arrayPalabraLarga[i];
            }
        }
        
        //Mostrando resultado en el DOM
        $resultadoPalabraLarga.textContent = `La palabra mas larga es: ${palabraLarga}`;

        //console.log(palabraLarga);
    });


}


