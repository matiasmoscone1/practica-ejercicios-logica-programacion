


//22. Comprobar anagramas: Escribe una función que tome dos cadenas de texto y 
//determine si son anagramas. Dos cadenas son anagramas si contienen exactamente 
//las mismas letras, sin importar el orden. Por ejemplo, las cadenas "roma" y "amor" 
//son anagramas.


export default function palabrasAnagramas(palabra1, palabra2, btn, resultado){

    const $btnAnagramas = document.querySelector(btn);

    const $resultadoAnagramas = document.querySelector(resultado);

    $btnAnagramas.addEventListener("click", () => {

        const $palabra1Anagramas = document.querySelector(palabra1).value;
        const $palabra2Anagramas = document.querySelector(palabra2).value;

        

    });




}
