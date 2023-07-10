



//47.Ejercicio de búsqueda de palabras: Escribe un programa que solicite al usuario ingresar 
//una oración y una palabra por teclado. Luego, el programa debe contar cuántas veces 
//aparece esa palabra en la oración ingresada y mostrar el resultado.


export default function buscarPalabra(textArea, inputPalabra, btnBuscar, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnBuscar = document.querySelector(btnBuscar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton buscar
    $btnBuscar.addEventListener("click", () => {
        //tomando el valor del textarea e input escrito por el usuario
        const $textArea = document.querySelector(textArea).value;
        const $inputPalabra = document.querySelector(inputPalabra).value;
        //creando variable contador
        let contador = 0;

        //console.log($inputPalabra);
        //Creando array para separar por "espacio en blanco" cada palabra del textarea
        let arrayOracion = $textArea.split(" ");
        //console.log(arrayOracion);

        //Ciclo que itera la cantidad de veces por palabra tenga el array creado
        for(let i = 0; i < arrayOracion.length; i++){
            //si encuentra la palabra escrita por el usuario en una iteracion, pone el contador
            //en +1
            if($inputPalabra === arrayOracion[i]){
                contador++; 
            }
        }
        //console.log(contador);
        //Mostrando el resultado por el DOM
        $resultado.textContent = `La palabra "${$inputPalabra}" se repite: ${contador} veces`;

    });

    //captando evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpia tanto lo que tiene el textarea y el input dentro, sino que tambien el resultado
        //mostrado anteriormente en el DOM
        document.querySelector(textArea).value = "";
        document.querySelector(inputPalabra).value = "";
        $resultado.textContent = "";
    });
    
}





