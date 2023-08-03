

//61. Cifrado de César: Escribe una función que implemente el cifrado de César, una
//técnica de cifrado simple en la que cada letra del texto original se desplaza 
//un número fijo de posiciones en el alfabeto.
//Se tomara un cifrado de 5 espacios de letra


export default function cifradoCesar(btnCifrar, btnLimpiar, textArea, resultado){

    //creando variables referenciales al DOM
    const $btnCifrar = document.querySelector(btnCifrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //Inicializando variable que tendra el texto cifrado
    let textoCifrado = "";

    //creando un array con las letras del abecedario mayusculas
    let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","W","X","Y","Z"];

    //captando evento click del boton Cifrar
    $btnCifrar.addEventListener("click", () => {

        //tomando el valor escrito por el usuario en el textarea y convirtiendo a mayuscula las letras
        const $textArea = document.querySelector(textArea).value.toUpperCase();

        //Convirtiendo lo escrito por el usuario en un array separando cada letra
        const arrayArea = $textArea.split("");

        //Se vuelve a inicializar textoCifrado a cadena vacia para que no duplique el resultado
        textoCifrado = "";
        //console.log(arrayArea);

        //Creando ciclo que itera cuantas letras tenga el textArea
        for(let i = 0; i < arrayArea.length; i++){
            //Crea un indice que devuelve la posicion donde se encuentra la letra en cada iteracion
            let indice = alfabeto.indexOf(arrayArea[i])
            //console.log(indice);

            //Si la posicion de la letra es mayor a 18 y menor a 24, se hace un calculo para 
            //que el cifrado quede como corresponde con 5 lugares adelante.
            switch(indice){
                case 19: 
                    indice = -5;
                    break;
                case 20: 
                    indice = -4;
                    break;    
                case 21: 
                    indice = -3;
                    break;
                case 22: 
                    indice = -2;
                    break;
                case 23: 
                    indice = -1;
                    break;    
            }
            //concatena la letra correspondiente al textoCifrado
            textoCifrado += alfabeto[indice +5];
             
        }

        //Muestra en el DOM el resultado
        $resultado.textContent = `El texto cifrado es: ${textoCifrado}`;
        //console.log(textoCifrado);

    });

    //Capta el evento del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpia el valor del textArea y el resultado en el DOM
        document.querySelector(textArea).value = " ";
        $resultado.textContent = " ";
    });  


}






