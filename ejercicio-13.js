

//13. Escribir un programa que encuentre el promedio de un arreglo de números enteros.


export default function calcularPromedio(array, btn, promedio){

    const $btnPromedio = document.querySelector(btn);

    const $arrayPromedio = document.querySelector(array);

    const arrayNuevo = [32,5,27,78,56,2,46,33,12,7];

    const $resultado = document.querySelector(promedio);

    $arrayPromedio.textContent = `[${arrayNuevo}]`;

    $btnPromedio.addEventListener("click", () => {

        let prom = 0
        let acumulador = 0;


        for(let i = 0; i < arrayNuevo.length; i++){
            
            acumulador += arrayNuevo[i];

            prom = acumulador / arrayNuevo.length;

        }

        $resultado.textContent = `El promedio del array es: ${prom}`;

    });



}














