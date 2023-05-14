

//12. Escribir un programa que encuentre el valor máximo y mínimo en un arreglo de números enteros.

export default function contarMayorMenor(array, btnMayor, btnMenor, resultado){

    // Declarando variables de DOM y variable del array
    const $array = document.querySelector(array);

    const arrayNuevo = [23,56,83,3,89,14,1];

    $array.textContent = `[${arrayNuevo}]`;

    const $resultado = document.querySelector(resultado);

    //Detecta el evento click en el DOM
    document.addEventListener("click", (e) => {

        //Declarando variables
        let mayor = arrayNuevo[0];
        let menor = arrayNuevo[0];

        //Matchea si el evento click fue del boton de mayor
        if(e.target.matches(btnMayor)){
            for(let i = 0; i < arrayNuevo.length; i++){
                if(mayor < arrayNuevo[i]){
                    mayor = arrayNuevo[i];
                }
            }

            //Muestra el resultado en el span
            $resultado.textContent = ` El mayor es: ${mayor}`;

        }

        //Matchea si el evento click fue del boton menor
        if(e.target.matches(btnMenor)){
            for(let i = 0; i < arrayNuevo.length; i++){
                if(menor > arrayNuevo[i]){
                    menor = arrayNuevo[i];
                }
            }

            //Muestra el resultado en el span
            $resultado.textContent = ` El menor es: ${menor}`;

        }


    });



}

