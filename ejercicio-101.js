
//101. Crea una función que tome una matriz de números y devuelva otra matriz con los 
//números ordenados de menor a mayor, sin usar el método sort.


export default function matrizOrdenada(matriz, btnOrdenar, btnOrdenarDescendente, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $matriz = document.querySelector(matriz);
    const $btnOrdenar = document.querySelector(btnOrdenar);
    const $btnOrdenarDescendente = document.querySelector(btnOrdenarDescendente);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando matriz principal de numeros
    const matrizPrincipal = [2, 6, 1, 15, 8, 7, 12];    

    //mostrando en el DOM la matriz de numeros principal
    $matriz.textContent = `[${matrizPrincipal}]`;

    //funcion ordenadora, siempre de forma ascendente, se le pasa por parametro un array de numeros
    const funcionOrdenadora = (arr) => {
        //si es igual o menor a 1 el largo del array, devuelve el array mismo
        if(arr.length <= 1){
            return arr;
        //sino, crea 3 constantes, el pivot que es el primer elemento del array
        }else{           
            const pivot = arr[0];
            //constante menor, filtra los elementos que son menores o iguales al pivot
            const menores = arr.slice(1).filter((elemento) => elemento <= pivot);
            //constante mayor, filtra los elementos que son mayores a pivot
            const mayores = arr.slice(1).filter((elemento) => elemento > pivot);
            //devuelve un arraynuevo donde los menores al pivot se ubican antes del pivot y los
            //mayores se ubican despues del pivot
            return [...funcionOrdenadora(menores), pivot, ...funcionOrdenadora(mayores)];
        }
    }

    $btnOrdenar.addEventListener("click", () => {
        const ordenamientoAscendente = funcionOrdenadora(matrizPrincipal.slice());
        //console.log(ordenamientoAscendente);
        $resultado.textContent = `[${ordenamientoAscendente}]`;
    });

    $btnOrdenarDescendente.addEventListener("click", () => {
        const ordenamientoDescendente = funcionOrdenadora(matrizPrincipal.slice()).reverse();
        //console.log(ordenamientoDescendente);
        $resultado.textContent = `[${ordenamientoDescendente}]`;
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
    })

}


