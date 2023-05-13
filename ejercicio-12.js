

//12. Escribir un programa que encuentre el valor máximo y mínimo en un arreglo de números enteros.

export default function contarMayorMenor(array, btnMayor, btnMenor, resultado){

    const $array = document.querySelector(array);

    const arrayNuevo = [23,56,83,3,89,14,1];

    $array.textContent = `[${arrayNuevo}]`;

    document.addEventListener("click", (e) => {

        if(e.target.matches(btnMayor)){
            console.log("Mayor");
        }


        if(e.target.matches(btnMenor)){
            console.log("Menor");
        }

    });



}

