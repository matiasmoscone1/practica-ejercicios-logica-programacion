
//8. Escribir un programa que determine la cantidad de palabras en una frase.

export default function determinarOracion(oracion, btn, resultado){

    const $oracion = document.querySelector(oracion);
    const $btn = document.querySelector(btn);
    const $resultado = document.querySelector(resultado);


    $btn.addEventListener("click", () => {

        let arrayOracion = $oracion.value.split(" ");

        $resultado.textContent = `La oracion tiene: ${arrayOracion.length} palabras`;

    });


}

