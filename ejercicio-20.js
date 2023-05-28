

//20. Eliminar duplicados: Escribe una función que tome un array y elimine todos los elementos 
//duplicados, dejando solo un ejemplar de cada valor. 
//Por ejemplo, para el array [1, 2, 2, 3, 4, 4, 5], la función debería devolver [1, 2, 3, 4, 5].


export default function eliminarDuplicados(arr, btn, resultado){

    //Creando variables del DOM y array original para mostrarlo
    const $arrayMuestra = document.querySelector(arr);
    const arrayNuevo = [1,2,2,3,4,4,5,8,8,11];
    const $btnDuplicados = document.querySelector(btn);
    const $resultadoDuplicados = document.querySelector(resultado);

    //Mostrando array original en el DOM
    $arrayMuestra.textContent = `[${arrayNuevo}]`;

    //Captando evento click del boton para eliminar duplicados
    $btnDuplicados.addEventListener("click", () => {
        
        //Convirtiendo el array en un Set asi se eliminan solos los duplicados
        //y luego crear de nuevo el array
        //Set es una coleccion de elementos unicos

        const arrayResultado = [...new Set(arrayNuevo)];

        //Mostrando resultado en el DOM
        $resultadoDuplicados.textContent = `El array sin duplicados es: [${arrayResultado}]`;

    });


}







