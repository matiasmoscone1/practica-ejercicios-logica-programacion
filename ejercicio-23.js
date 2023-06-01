


//23. Inversión de cadena: Escribe una función que invierta una cadena de texto.


export default function invertirCadena(palabra, btn, resultado){
    //Creando variables del DOM
    const $btnInvertir = document.querySelector(btn);
    const $resultadoInvertir = document.querySelector(resultado);

    //Captando evento click del boton Invertir
    $btnInvertir.addEventListener("click", () => {
        //Captando el valor introducido por teclado del input 
        const $palabraInvertir = document.querySelector(palabra).value;
        //Convierte una palabra en un array, lo da vuelta y lo 
        //junta de nuevo como si fuera una palabra
        const nuevaPalabra = $palabraInvertir.split("").reverse().join("");

        //Mostrando resultado en el DOM
        $resultadoInvertir.textContent = `La palabra invertida es: ${nuevaPalabra}`;

    });

}



