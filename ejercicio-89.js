
//89. Doble de números pares: Escribe una función que tome una matriz de números, filtre 
//los números pares y luego devuelva una nueva matriz con cada número par duplicado.

export default function dobleNumerosPares(matriz, btnFiltrar, btnLimpiar, resultado){

    const $matriz = document.querySelector(matriz);
    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const arrayNumeros = [2, 64, 33, 16, 25, 43, 11, 22, 14, 19];

    $matriz.textContent = `[${arrayNumeros}]`;

    const filtrarMatriz = (mat) => {
        const nuevoArray = mat.filter((valor) => (valor % 2) === 0);
        return nuevoArray;
    }


    $btnFiltrar.addEventListener("click", () => {
        const res = filtrarMatriz(arrayNumeros);
       
        $resultado.textContent = `[${res}]`;
        
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
    })

}
