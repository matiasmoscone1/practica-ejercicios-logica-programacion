


//76. Implementa un algoritmo de búsqueda binaria para buscar un elemento en un arreglo ordenado.

export default function busquedaBinaria(btnBuscar, btnLimpiar, numero, resultado){


    const $btnBuscar = document.querySelector(btnBuscar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    

    $btnBuscar.addEventListener("click", () => {
        const $numero = document.querySelector(numero).value;

        const arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        let izquierda = 0;
        let derecha = arrayNum.length - 1;

        
        while(izquierda <= derecha){
            let medio = Math.floor((izquierda + derecha) / 2);

            if(arrayNum[medio] === $numero){
                console.log(`El numero encontrado es: ${medio}`);
                break;
            }
            else if(arrayNum[medio] < $numero){
                izquierda = medio + 1;    
            }else{
                derecha = medio - 1;
            }
        }

    });



}


