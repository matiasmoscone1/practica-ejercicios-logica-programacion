

//13. Escribir un programa que encuentre el promedio de un arreglo de números enteros.


export default function calcularPromedio(array, btn, promedio){

    //Declarando variables de DOM
    const $btnPromedio = document.querySelector(btn);
    const $arrayPromedio = document.querySelector(array);
    const $resultado = document.querySelector(promedio);

    //Declarando array y mostrandolo en el documento
    const arrayNuevo = [32,5,27,78,56,2,46,33,12,7];
    $arrayPromedio.textContent = `[${arrayNuevo}]`;

    //Detectando evento click del boton de calcular promedio
    $btnPromedio.addEventListener("click", () => {

        //Declarando variables para calcular el promedio
        let prom = 0
        let acumulador = 0;

        //Recorriendo el array con un ciclo y sumando todos los valores para calcular promedio
        for(let i = 0; i < arrayNuevo.length; i++){
            
            acumulador += arrayNuevo[i];

        }

        //Calculando promedio
        prom = acumulador / arrayNuevo.length;

        //Mostrando resultado en el documento
        $resultado.textContent = `El promedio del array es: ${prom}`;

    });



}















