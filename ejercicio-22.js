


//22. Comprobar anagramas: Escribe una función que tome dos cadenas de texto y 
//determine si son anagramas. Dos cadenas son anagramas si contienen exactamente 
//las mismas letras, sin importar el orden. Por ejemplo, las cadenas "roma" y "amor" 
//son anagramas.


export default function palabrasAnagramas(palabra1, palabra2, btn, resultado){

    //Declarando las variables del DOM
    const $btnAnagramas = document.querySelector(btn);
    const $resultadoAnagramas = document.querySelector(resultado);

    //Captando evento click del boton verificar
    $btnAnagramas.addEventListener("click", () => {

        //Captando el valor de los inputs de las palabras del DOM
        let $palabra1Anagramas = document.querySelector(palabra1).value;
        let $palabra2Anagramas = document.querySelector(palabra2).value;

        //Pone todos los caracteres de las palabras en 
        //minusculas y sin espacios en blanco al principio y al final
        $palabra1Anagramas = $palabra1Anagramas.toLowerCase().trim();
        $palabra2Anagramas = $palabra2Anagramas.toLowerCase().trim();

        //Separa cada caracter de las palabras en un array
        const caracter1 = $palabra1Anagramas.split("");
        const caracter2 = $palabra2Anagramas.split("");

        //console.log(caracter1, caracter2);
        
        //Agarra los arrays de caracteres los ordena y los junta nuevamente asi
        //quedan palabras "iguales" si es q tienen los mismos carcateres
        const ordenarPalabra1 = caracter1.sort().join("");
        const ordenarPalabra2 = caracter2.sort().join("");

        //Compara las palabras y muestra el resultado en el DOM
        if(ordenarPalabra1 === ordenarPalabra2){
            $resultadoAnagramas.textContent = `Las palabras ${$palabra1Anagramas} y ${$palabra2Anagramas} son anagarmas`; 
        }else{
            $resultadoAnagramas.textContent = `Las palabras ${$palabra1Anagramas} y ${$palabra2Anagramas} NO son anagramas`;     
        }

    });




}
