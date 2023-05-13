

//12. Escribir un programa que encuentre el valor máximo y mínimo en un arreglo de números enteros.

export default function contarMayorMenor(array, btnMayor, btnMenor, resultado){

    const $array = document.querySelector(array);

    const arrayNuevo = [23,56,83,3,89,14,1];

    $array.textContent = `[${arrayNuevo}]`;

    const $resultado = document.querySelector(resultado);

    document.addEventListener("click", (e) => {

        let mayor = 0;

        if(e.target.matches(btnMayor)){
            console.log("Mayor");
            for(let i = 0; i < arrayNuevo.length; i++){
                if(arrayNuevo[i] > arrayNuevo[i + 1]){
                    mayor = arrayNuevo[i];
                }
            }

            $resultado.textContent = `${mayor}`;
        }


        if(e.target.matches(btnMenor)){
            console.log("Menor");

            $resultado.textContent = `Menor`;

        }

    });



}

