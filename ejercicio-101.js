
//101. Crea una función que tome una matriz de números y devuelva otra matriz con los 
//números ordenados de menor a mayor, sin usar el método sort.


export default function matrizOrdenada(matriz, btnOrdenar, btnOrdenarDescendente, btnLimpiar, resultado){


    const $matriz = document.querySelector(matriz);
    const $btnOrdenar = document.querySelector(btnOrdenar);
    const $btnOrdenarDescendente = document.querySelector(btnOrdenarDescendente);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const matrizPrincipal = [2, 6, 1, 15, 8, 7, 12];    

    $matriz.textContent = `[${matrizPrincipal}]`;


    const funcionOrdenadora = (arr) => {
        if(arr.length <= 1){
            return arr;
        }else{           
            const pivot = arr[0];
            const menores = arr.slice(1).filter((elemento) => elemento <= pivot);
            const mayores = arr.slice(1).filter((elemento) => elemento > pivot);
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


