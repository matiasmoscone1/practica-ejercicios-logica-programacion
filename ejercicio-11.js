

// 11. Escribir un programa que cuente cuántas veces aparece una letra en una cadena de texto ingresada por el usuario.

export default function contarLetras(palabra, btn, resultado){


    const $btnLetras = document.querySelector(btn);

    const $resultado = document.querySelector(resultado);

    let contador = 0;

    $btnLetras.addEventListener("click", () => {

        const $palabra = document.querySelector(palabra).value;
        const arrayPalabra = $palabra.split('');

        for(let i = 0; i < arrayPalabra.length; i++ ){
            for(let j = i+1; j < arrayPalabra.length; j++){
                if(arrayPalabra[i] === arrayPalabra[j]){
                    contador++;
                }
            }
        }

        $resultado.textContent = `La palabra tiene ${contador} letras repetidas`;

     
    });



}