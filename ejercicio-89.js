
//89. Doble de números pares: Escribe una función que tome una matriz de números, filtre 
//los números pares y luego devuelva una nueva matriz con cada número par duplicado.

export default function dobleNumerosPares(matriz, btnFiltrar, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $matriz = document.querySelector(matriz);
    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando matriz principal de numeros
    const arrayNumeros = [2, 64, 33, 16, 25, 43, 11, 22, 14, 19];

    //mostrando matriz principal en el DOM
    $matriz.textContent = `[${arrayNumeros}]`;

    //creando funcion que recibe por parametro una matriz de numeros
    const filtrarMatriz = (mat) => {
        //devuelve el array filtrado con los numeros pares y multiplicados por dos
        return mat.filter((valor) => ((valor % 2) === 0)).map((val) => val * 2);
    }


    $btnFiltrar.addEventListener("click", () => {
        const res = filtrarMatriz(arrayNumeros);
       
        $resultado.textContent = `[${res}]`;
        
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
    })

}
