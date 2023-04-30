
//4. Escribir un programa que calcule la suma de los primeros n números naturales, donde n es un número entero leído por el programa.

export default function sumaNumeros(numero, btn, resultado){

    const $btnSuma = document.querySelector(btn);
    const $resultadoSuma = document.querySelector(resultado);
    
    $btnSuma.addEventListener("click", () => {
        const $numeroSuma = parseInt(document.querySelector(numero).value);
        let res = 0;

        for(let i = 0; i <= $numeroSuma; i++){
            res += i;
        }

        $resultadoSuma.textContent = `El resultado es: ${res}`;
    })
}




