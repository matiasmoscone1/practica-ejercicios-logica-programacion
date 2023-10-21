
//90. Suma de todos los números: Escribe una función que tome una matriz de números y 
//use reduce para sumar todos los elementos.


export default function sumarNumeros(arrayPrincipal, btnSuma, btnLimpiar, resultado){

    const arrayNumeros = [2, 5, 3, 12, 18, 15, 33, 25, 24, 37];

    const $arrayPrincipal = document.querySelector(arrayPrincipal);
    const $btnSuma = document.querySelector(btnSuma);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $arrayPrincipal.textContent = `[${arrayNumeros.join(",")}]`;

    $btnSuma.addEventListener("click", () => {
        
        const res = arrayNumeros.reduce((acc, val) => {
            acc += val;
            return acc;
        }, 0);

        $resultado.textContent = `La suma de los numeros del array es: ${res}`;
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
    });

}


