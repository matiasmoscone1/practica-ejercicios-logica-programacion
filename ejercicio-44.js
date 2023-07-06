

//44. Crear una función que tome un array de strings como parámetro y devuelva 
//un nuevo array con solo las palabras que tienen 5 o más de 5 letras.



export default function filtrarPalabrasCincoLetras(btnFiltrar, btnLimpiar, textArea, resultado){

    //Creando variables referenciales al DOM
    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    //Captando evento click del boton Filtrar
    $btnFiltrar.addEventListener("click", () => {
        //Creando variable referencial del dom para tomar el valor del texto escrito por el usuario
        const $textArea = document.querySelector(textArea).value;
        //separando las palabras escritas por el usuario en un array
        let nuevoArray = $textArea.split(" ");
        //creando array nuevo que contendra las palabras de 5 letras o + 
        let arrayFiltrado = [];
        //ciclo for que se ejecuta tantas veces como palabras tenga el nuevoArray
        for(let i = 0; i < nuevoArray.length; i++){
            //Si la palabra que esta iterando tiene una longitud igual o mayor a 5
            //se le agrega al arrayFiltrado creado la palabra misma
            if(nuevoArray[i].length >= 5){
                arrayFiltrado.push(nuevoArray[i]);
            }
        }

        //Mostrando en el DOM el resultado
        $resultado.innerHTML = `Las palabras filtradas son: ${arrayFiltrado.join(", ")}`;
        //console.log(arrayFiltrado);
    });

    //Captando el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpiando el contenido del DOM del resultado y el textArea.
        $resultado.innerHTML = "";
        document.querySelector(textArea).value = "";
    });


}





