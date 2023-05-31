


//22. Comprobar anagramas: Escribe una función que tome dos cadenas de texto y 
//determine si son anagramas. Dos cadenas son anagramas si contienen exactamente 
//las mismas letras, sin importar el orden. Por ejemplo, las cadenas "roma" y "amor" 
//son anagramas.


export default function palabrasAnagramas(palabra1, palabra2, btn, resultado){

    const $btnAnagramas = document.querySelector(btn);

    const $resultadoAnagramas = document.querySelector(resultado);

    $btnAnagramas.addEventListener("click", () => {

        let $palabra1Anagramas = document.querySelector(palabra1).value;
        let $palabra2Anagramas = document.querySelector(palabra2).value;

        $palabra1Anagramas = $palabra1Anagramas.toLowerCase().trim();
        $palabra2Anagramas = $palabra2Anagramas.toLowerCase().trim();


        const caracter1 = $palabra1Anagramas.split("");
        const caracter2 = $palabra2Anagramas.split("");

        const ordenarPalabra1 = caracter1.sort().join("");
        const ordenarPalabra2 = caracter2.sort().join("");

        if(ordenarPalabra1 === ordenarPalabra2){
            $resultadoAnagramas.textContent = `Las palabras ${$palabra1Anagramas} y ${$palabra2Anagramas} son anagarmas`; 
        }else{
            $resultadoAnagramas.textContent = `Las palabras ${$palabra1Anagramas} y ${$palabra2Anagramas} NO son anagramas`;     
        }

    });




}
