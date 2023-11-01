

//95. Map recursivo: Escribe una función que aplique una función dada a cada elemento de un array y 
//sus elementos anidados de manera recursiva.

export default function mapRecursivo(arrayPrincipal, btnFuncion, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $arrayPrincipal = document.querySelector(arrayPrincipal);
    const $btnFuncion = document.querySelector(btnFuncion);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando array de numeros principal
    const arrayNumeros = [2, 5, 10, 20];

    //mostrando array de numeros en el DOM
    $arrayPrincipal.textContent = `[${arrayNumeros}]`;

    //creando la funcion recursiva, que mapea un array de numeros y se le aplica la funcion 
    //a cada valor
    const funcionRecursiva = (arr, func) => {
        return arr.map((valor) => func(valor));  
    }

    //captando evento click del boton Funcion
    $btnFuncion.addEventListener("click", () => {

        //crea una constante que almacena la llamada a la funcion y por parametros se le pasa
        //el array de numeros y la funcion callback para que realize la recursion
        const res = funcionRecursiva(arrayNumeros, (x) => x * 2);

        //console.log(res);

        //mostrando el resultado en el DOM
        $resultado.textContent = `El resultado del array es: [${res}]`;
    });

    //captando evento del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM
        $resultado.textContent = "";
    });


}


