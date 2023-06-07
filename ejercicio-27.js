

//27. Generación de patrones: Escribe un programa que genere un patrón de 
//asteriscos en forma de triángulo o cuadrado.


export default function generarPatron(triangulo, cuadrado, resultado){

    //Asignando variables para manipular el DOM
    const $btnTriangulo = document.querySelector(triangulo);
    const $btnCuadrado = document.querySelector(cuadrado);
    const $resultadoForma = document.querySelector(resultado);

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
        
    })
    
}
