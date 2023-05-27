

//20. Eliminar duplicados: Escribe una función que tome un array y elimine todos los elementos 
//duplicados, dejando solo un ejemplar de cada valor. 
//Por ejemplo, para el array [1, 2, 2, 3, 4, 4, 5], la función debería devolver [1, 2, 3, 4, 5].


export default function eliminarDuplicados(arr, btn, resultado){

    const $arrayMuestra = document.querySelector(arr);

    const arrayNuevo = [1,2,2,3,4,4,5,8,8,11];

    $arrayMuestra.textContent = `[${arrayNuevo}]`;
    
    const $btnDuplicados = document.querySelector(btn);
    const $resultadoDuplicados = document.querySelector(resultado);


    $btnDuplicados.addEventListener("click", () => {
        
        for(let i = 0; i < arrayNuevo.length; i++){
            for(let j = 0; j < arrayNuevo.length - 1; j++){
                if(arrayNuevo[j] === arrayNuevo[j + 1]){
                    arrayNuevo.shift(arrayNuevo[j]);
                }
            }
        }

        $resultadoDuplicados.textContent = `El array sin duplicados es: ${arrayNuevo}`;

    });


}







