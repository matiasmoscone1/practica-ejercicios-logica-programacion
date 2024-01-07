

//117. Buscar Subcadena: Escribe una función que encuentre todas las apariciones 
//de una subcadena en una cadena.


export default function buscaSubCadena(textarea, input, btnBuscar, btnLimpiar, resultado){


    const $btnBuscar = document.querySelector(btnBuscar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    

    $btnBuscar.addEventListener("click", () => {
        const $textArea = document.querySelector(textarea).value;
        const $inputSubCadena = document.querySelector(input).value;

        //console.log($textArea);
        //console.log($inputSubCadena);

        const nuevoArray = $textArea.split(" ");

        //console.log(nuevoArray);

        let cont = 0;

        nuevoArray.map((palabra) => {
            if(palabra.includes($inputSubCadena.toString())){
                cont++;
            }
        });

        //console.log(cont);
        $resultado.textContent = `La cantidad de veces que aparece la subcadena ${$inputSubCadena}
        son: ${cont}`;
 
    });


    $btnLimpiar.addEventListener("click", () => {
        document.querySelector(textarea).value = "";
        document.querySelector(input).value = "";
        $resultado.textContent = "";
    });


}


