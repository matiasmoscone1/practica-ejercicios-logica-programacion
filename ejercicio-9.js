

//9. Escribir un programa que ordene un arreglo de números enteros de menor a mayor.

export default function arrayMayorMenor(arrayMayorMenor, btnMayor, btnMenor){

    const arrayDesordenado = [32,6,75,2,50,22,1];
    const $array = document.querySelector(arrayMayorMenor);

    $array.textContent = `[${arrayDesordenado}]`;

    document.addEventListener("click", (e) => {
        if(e.target.matches(btnMayor)){
            for(let i = 0; i < arrayDesordenado.length; i++){
                for(let j = 0; j < arrayDesordenado.length - 1; j++){
                    if(arrayDesordenado[j] < arrayDesordenado[j + 1]){
                        let nuevoArray = arrayDesordenado[j];
                        arrayDesordenado[j] = arrayDesordenado[j + 1];
                        arrayDesordenado[j + 1] = nuevoArray;
                    }

                }
            }
        }
    
        if(e.target.matches(btnMenor)){
            for(let f = 0; f < arrayDesordenado.length; f++){
                for(let k = 0; k < arrayDesordenado.length - 1; k++){
                    if(arrayDesordenado[k] > arrayDesordenado[k + 1]){
                        let nuevoArray = arrayDesordenado[k];
                        arrayDesordenado[k] = arrayDesordenado[k + 1];
                        arrayDesordenado[k + 1] = nuevoArray;
                    }

                }
            }
        }


        $array.textContent = `[${arrayDesordenado}]`;
    })

}


