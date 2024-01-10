

//117. Buscar Subcadena: Escribe una función que encuentre todas las apariciones 
//de una subcadena en una cadena.


export default function buscaSubCadena(textarea, input, btnBuscar, btnLimpiar, resultado){

    //craendo variables referenciales al DOM
    const $btnBuscar = document.querySelector(btnBuscar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    


    //tomando los valores de los input escritos por el usuario
    const $textArea = document.querySelector(textarea).value;
    const $inputSubCadena = document.querySelector(input).value;

    //console.log($textArea);
    //console.log($inputSubCadena);

    //convierte lo que esta en el textarea en una array de palabras
    const nuevoArray = $textArea.split(" ");

    //console.log(nuevoArray);

    //inicializa contador
    let cont = 0;

    //recorre el array de palabras
    nuevoArray.map((palabra) => {
        //y por cada palabra verifica si existe la subacadena requerida por el usuario
        if(palabra.includes($inputSubCadena.toString())){
            //suma el contador en 1
            cont++;
        }
    });

    //console.log(cont);
    //muestra el resultado en el DOM
    $resultado.textContent = `La cantidad de veces que aparece la subcadena ${$inputSubCadena}
    son: ${cont}`;





    //captando evento click del boton Buscar
    $btnBuscar.addEventListener("click", () => {
        
 
    });


    //capta el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el dom y los input escritos por el usuario
        document.querySelector(textarea).value = "";
        document.querySelector(input).value = "";
        $resultado.textContent = "";
    });


}


