

//95. Map recursivo: Escribe una función que aplique una función dada a cada elemento de un array y 
//sus elementos anidados de manera recursiva.

export default function mapRecursivo(arrayPrincipal, btnFuncion, btnLimpiar, resultado){

    const $arrayPrincipal = document.querySelector(arrayPrincipal);
    const $btnFuncion = document.querySelector(btnFuncion);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    const arrayNumeros = [2, 5, 10, 20];

    $arrayPrincipal.textContent = `[${arrayNumeros}]`;

    const funcionRecursiva = (arr, func) => {
        return arr.map((valor) => func(valor));  
    }

    $btnFuncion.addEventListener("click", () => {

        const res = funcionRecursiva(arrayNumeros, (x) => x * 2);

        console.log(res);
    });



}


