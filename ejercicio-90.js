
//90. Suma de todos los números: Escribe una función que tome una matriz de números y 
//use reduce para sumar todos los elementos.


export default function sumarNumeros(arrayPrincipal, btnSuma, btnLimpiar, resultado){

    //creando array principal de numeros
    const arrayNumeros = [2, 5, 3, 12, 18, 15, 33, 25, 24, 37];

    //creando variables referenciales al DOM
    const $arrayPrincipal = document.querySelector(arrayPrincipal);
    const $btnSuma = document.querySelector(btnSuma);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //mostrando en el DOM el array principal de numeros
    $arrayPrincipal.textContent = `[${arrayNumeros.join(",")}]`;

    //captando evento click del boton Sumar
    $btnSuma.addEventListener("click", () => {
        
        //utiliza la funcion reduce para ir acumulando los valores del array
        const res = arrayNumeros.reduce((acc, val) => {
            acc += val;
            //devuelve el array sumado completo en forma de un valor solo llamado "acc"
            return acc;
        }, 0);

        //muestra resultado en el DOM
        $resultado.textContent = `La suma de los numeros del array es: ${res}`;
    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el resultado del DOM
        $resultado.textContent = "";
    });

}


