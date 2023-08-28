


//76. Implementa un algoritmo de búsqueda binaria para buscar un elemento en un arreglo ordenado.

export default function busquedaBinaria(btnBuscar, btnLimpiar, numero, resultado){

    //Creando variables referenciales al DOM
    const $btnBuscar = document.querySelector(btnBuscar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    

    //captando evento click del boton Buscar
    $btnBuscar.addEventListener("click", () => {
        //tomando valor del input escrito por el usuario
        const $numero = parseInt(document.querySelector(numero).value);

        //creando array para buscar el elemento dentro
        const arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        //creando variables izquierda y derecha, son los extremos del array
        let izquierda = 0;
        let derecha = arrayNum.length - 1;
        //creando variable bandera por si no encuentra el resultado, mostrar que NO encontro
        let res = false;
        
        //ciclo donde ira toda la logica
        while(izquierda <= derecha){
            //crea variable medio que es la suma de los extremos dividido dos
            let medio = Math.floor((izquierda + derecha) / 2);

            //verifica que la mitad del array sea el numero
            if(arrayNum[medio] === $numero){
                //console.log(`El numero encontrado es: ${medio}`);
                //si es el numero, muestra en el DOM el resultado
                $resultado.textContent = `El numero se encontro en la posicion: ${medio}`;
                //variable bandera pasa a true
                res = true;
                break;
            }
            //si la mitad del array es menor al numero, significa que el numero se encuentra en
            //la parte derecha, para eso a la parte izquierda se le reasigna el valor mitad + 1
            //para comenzar a buscar nuevamente desde ahi 
            else if(arrayNum[medio] < $numero){
                izquierda = medio + 1;    
            }else{
                //si la mitad del array es mayor al numero, significa que el numero esta en la
                //parte izquierda y sigue la misma logica mencionada
                derecha = medio - 1;
            }
        }

        //si la variable bandera es false, significa que no encontro el numero
        if(!res){
            //console.log("No se encontro el numero");
            //muestra el resultado en el DOM
            $resultado.textContent = "No se encontro el numero.";
        }

    });

    //capta evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el input y el resultado en el DOM
        document.querySelector(numero).value = "";
        $resultado.textContent = "";
    });


}


