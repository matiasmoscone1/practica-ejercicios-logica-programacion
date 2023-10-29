
//94. Filtrar palabras largas: Escribe una función que tome una cadena de palabras y filtre 
//las palabras que tienen más de n caracteres.

export default function filtrarPalabrasLargas(textArea, input, btnFiltrar, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    
    //creando funcion que filtra palabras, se pasa por parametro la cadena de texto y el valor
    //de maximos caracteres
    const filtraPalabras = (texto, num) => {

        //convierte la cadena de texto en un array
        const nuevoArray = texto.split(" ");
        //console.log(nuevoArray);
        
        //crea un array vacio donde se almacenaran las palabras con mas longitud
        const arrayResultado = [];
        
        //agrega las palabras con mayor longitud que el numero pasado por parametro
        nuevoArray.map((pal) => {
            if(pal.length > num){
                arrayResultado.push(pal);
            }
        });
        
        //devuelve el array creado con las palabras con mayor longitud que el nro pasado por parametro
        return arrayResultado;
        
    }

    //captando evento click del boton Filtrar
    $btnFiltrar.addEventListener("click", () => {

        //obtiene la cadena de texto del textarea y el numero del input
        const $textArea = document.querySelector(textArea).value;
        const $inputNum = document.querySelector(input).value;
            
        //crea nueva constante res y llama a la funcion que implementa la logica con sus argumentos
        const res = filtraPalabras($textArea, $inputNum);

        //muestra el resultado en el DOM
        $resultado.textContent = `El array filtrado es: [${res}]`;
        //console.log(res);
    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia todo el DOM
        document.querySelector(input).value = "";
        document.querySelector(textArea).value = "";
        $resultado.textContent = "";
    });



}


