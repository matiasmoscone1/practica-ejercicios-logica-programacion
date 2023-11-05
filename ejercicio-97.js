
//97. Escribe una función que tome una matriz de palabras y una palabra como argumento. 
//Utiliza filter para devolver una nueva matriz que solo contenga palabras sean iguales 
//al argumento. CON REDUCE


export default function filtraPalabraConcreta(textArea, input, btnFiltrar, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando funcion que filtra el array, se le pasa un array por parametro y una palabra a filtrar
    const filtrarMatriz = (arr, palabra) => {    
        //crea nuevo array con reduce, filtrando con acc como nuevo array vacio y pal la palabra que va iterando
        const arrayReducido = arr.reduce((acc, pal) => {
            //si la palabra iterada es igual a la palabra pasada por parametro
            if(pal === palabra){
                //se agrega al array vacio la palabra y va filtrando
                acc.push(pal);
            }
            //devuelve acc
            return acc;
        //se inicializa acc con array vacio
        }, []);
        //devuelve el array filtrado
        return arrayReducido;

        //return arr.map((pal) => pal === palabra);
    }

    //captando evento click del boton Filtrar
    $btnFiltrar.addEventListener("click", () => {
        //toma los valores escritos por el usuario en el textarea y en el input
        const $textArea = document.querySelector(textArea).value;
        const $input = document.querySelector(input).value;
    
        //convierte el textarea en un array con todas las palabras separadas por espacio en blanco
        const arrayTexto = $textArea.split(" ");

        //crea una constante que llama a la funcion que filtra la palabra y se le pasa por parametro
        const res = filtrarMatriz(arrayTexto, $input);

        //muestra el resultado en el DOM
        $resultado.textContent = `El array con palabras filtradas es: ${res}`;
        //console.log(res);
    });

    //capta el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM completo
        $resultado.textContent = "";
        document.querySelector(input).value = "";
        document.querySelector(textArea).value = "";
    })





}


