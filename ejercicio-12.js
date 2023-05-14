

//12. Escribir un programa que encuentre el valor máximo y mínimo en un arreglo de números enteros.

export default function contarMayorMenor(array, btnMayor, btnMenor, resultado){

    const $array = document.querySelector(array);

    const arrayNuevo = [23,56,83,3,89,14,1];

    $array.textContent = `[${arrayNuevo}]`;

    const $resultado = document.querySelector(resultado);

    document.addEventListener("click", (e) => {

        let mayor = arrayNuevo[0];
        let menor = arrayNuevo[0];


        if(e.target.matches(btnMayor)){
            for(let i = 0; i < arrayNuevo.length; i++){
                if(mayor < arrayNuevo[i]){
                    mayor = arrayNuevo[i];
                }
            }

            $resultado.textContent = ` El mayor es: ${mayor}`;

        }

        if(e.target.matches(btnMenor)){
            for(let i = 0; i < arrayNuevo.length; i++){
                if(menor > arrayNuevo[i]){
                    menor = arrayNuevo[i];
                }
            }

            $resultado.textContent = ` El menor es: ${menor}`;

        }


    });



}

