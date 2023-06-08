


//28. Patrón de números ascendentes: 
//Escribe un programa que genere un patrón de números ascendentes en forma de triángulo.


export default function patronNumAscendentes(btnGenerar, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoPatron = document.querySelector(resultado);

    //Captando evento click del boton Generar 
    $btnGenerar.addEventListener("click", () => {

        //Creando variables para iterar en el ciclo y generar el patron
        let numFila = 5;
        let patron = "";

        //Ciclo que genera el patron linea por linea
        for(let i = 1; i <= numFila; i++){
            //inicializo la linea con un string vacio
            let linea = '';
            //ciclo que por cada linea suma el valor de i
            for(let j = 1; j <= i; j++){
                linea += i;
            }
            //va sumando las lineas listas al patron y las separa con un salto de linea \n
            patron += linea + '\n';
        }
        
        //console.log(patron);

        //Muestra resultado por DOM reemplazando el salto de linea \n por una etiqueta br
        $resultadoPatron.innerHTML = patron.replace(/\n/g, "<br>");

    });

    //Captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Restablece la div de $resultadoPatron en un string vacio
        $resultadoPatron.innerHTML = "";

    });

}