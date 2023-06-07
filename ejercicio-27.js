

//27. Generación de patrones: Escribe un programa que genere un patrón de 
//asteriscos en forma de triángulo o cuadrado.


export default function generarPatron(triangulo, cuadrado, limpiar, resultado){

    //Asignando variables para manipular el DOM
    const $btnTriangulo = document.querySelector(triangulo);
    const $btnCuadrado = document.querySelector(cuadrado);
    const $resultadoForma = document.querySelector(resultado);
    const $btnLimpiar = document.querySelector(limpiar);

    //Captando evento click del boton Triangulo
    $btnTriangulo.addEventListener("click", () => {
        //Asignando las variables para generar el patron, numFilas significa 
        //cuantas veces va a iterar el ciclo for
        let numFilas = 5; 
        let patron = "";
        
        //Ciclo for que itera por cada linea itera otro for que le va sumando asteriscos a la linea
        for (let i = 1; i <= numFilas; i++) {
            let linea = '';
            for (let j = 1; j <= i; j++) {
              linea += '*';
            }
            //console.log(linea);
            //Se le asigna valor al patron poniendole todo el contenido que tiene "linea"
            patron += linea + "\n";
        }
        
        //Se agrega el patron a la div de $resultadoForma y por cada salto de linea \n 
        //se le reemplaza por un <br>  
        $resultadoForma.innerHTML = patron.replace(/\n/g, "<br>");
        
    });
 
    //Captando evento del boton Cuadrado
    $btnCuadrado.addEventListener("click", () => {
        //Creando variables para la creacion del patron
        let numFilas = 3; 
        let patron = "";

        //Ciclos for que recorren iguales y se agrega asteriscos en una variable
        for (let i = 1; i <= numFilas; i++) {
            let linea = '';
            for (let j = 1; j <= numFilas; j++) {
              linea += '*';
            }
            //Se le agrega al patron los asteriscos de la variable con un salto de linea
            patron += linea + "\n";
        }
        //Mostrando por DOM el contenido del patron y por cada salto de linea se le 
        //reemplaza por un <br>
        $resultadoForma.innerHTML = patron.replace(/\n/g, "<br>");

    });


    $btnLimpiar.addEventListener("click", () => {

        $resultadoForma.innerHTML = "";

    });


}
