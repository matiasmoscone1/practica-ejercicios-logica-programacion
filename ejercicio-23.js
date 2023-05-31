


//23. Inversión de cadena: Escribe una función que invierta una cadena de texto.


export default function invertirCadena(palabra, btn, resultado){

    const $btnInvertir = document.querySelector(btn);
    const $resultadoInvertir = document.querySelector(resultado);

    $btnInvertir.addEventListener("click", () => {
        const $palabraInvertir = document.querySelector(palabra).value;

        
        $resultadoInvertir.textContent = `La palabra invertida es: ${}`;

    });

}



