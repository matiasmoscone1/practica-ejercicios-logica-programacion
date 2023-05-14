

//13. Escribir un programa que encuentre el promedio de un arreglo de números enteros.


export default function calcularPromedio(array, btn, promedio){

    const $btnPromedio = document.querySelector(btn);

    const $arrayPromedio = document.querySelector(array);

    const arrayNuevo = [32,5,27,78,56,2,46,33,12,8];

    const $resultado = document.querySelector(promedio);

    $arrayPromedio.textContent = `[${arrayNuevo}]`;

    $btnPromedio.addEventListener("click", () => {

        let prom = 0;


        $resultado.textContent = `El promedio del array es: ${prom}`;

    });



}















