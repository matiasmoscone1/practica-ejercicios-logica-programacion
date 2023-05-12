

// 11. Escribir un programa que cuente cuántas veces aparece una letra en una cadena de texto ingresada por el usuario.

export default function contarLetras(palabra, btn, resultado){

    const $btnLetras = document.querySelector(btn);
    const $resultado = document.querySelector(resultado);

    $btnLetras.addEventListener("click", () => {

        const $palabra = document.querySelector(palabra).value;
        const letrasRepetidas = {};

        let contador = 0;

        for(let i = 0; i < $palabra.length; i++ ){
            const letra = $palabra[i];
            if(letrasRepetidas[letra]){
                letrasRepetidas[letra] += 1;
            } else {
                letrasRepetidas[letra] = 1;
            }
        }

        

        for (const letra in letrasRepetidas) {
            if (letrasRepetidas[letra] > 1) {
                contador += letrasRepetidas[letra];
            }
        }

        $resultado.textContent = `La palabra tiene ${contador} letras repetidas`;

    });
}




