


//76. Implementa un algoritmo de búsqueda binaria para buscar un elemento en un arreglo ordenado.

export default function busquedaBinaria(btnBuscar, btnLimpiar, numero, resultado){


    const $btnBuscar = document.querySelector(btnBuscar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    

    $btnBuscar.addEventListener("click", () => {
        const $numero = parseInt(document.querySelector(numero).value);

        const arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        let izquierda = 0;
        let derecha = arrayNum.length - 1;
        let res = false;
        
        while(izquierda <= derecha){
            let medio = Math.floor((izquierda + derecha) / 2);

            if(arrayNum[medio] === $numero){
                //console.log(`El numero encontrado es: ${medio}`);
                $resultado.textContent = `El numero se encontro en la posicion: ${medio}`;
                res = true;
                break;
            }
            else if(arrayNum[medio] < $numero){
                izquierda = medio + 1;    
            }else{
                derecha = medio - 1;
            }
        }

        if(!res){
            //console.log("No se encontro el numero");
            $resultado.textContent = "No se encontro el numero.";
        }
    


    });

    $btnLimpiar.addEventListener("click", () => {
        document.querySelector(numero).value = "";
        $resultado.textContent = "";
    });


}


