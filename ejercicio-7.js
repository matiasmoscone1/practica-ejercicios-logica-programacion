
//7. Escribir un programa que determine la cantidad de letras de una palabra.

export default function determinarPalabra(palabra, btn, resultado){

    const $palabra = document.querySelector(palabra);

    const $resultado = document.querySelector(resultado);

    const $btn = document.querySelector(btn);

   

    $btn.addEventListener("click", () => {

        $resultado.textContent = `La palabra tiene: ${$palabra.value.length} letras`;

    });

}





