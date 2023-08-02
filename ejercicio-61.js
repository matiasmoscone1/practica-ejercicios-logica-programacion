

//61. Cifrado de César: Escribe una función que implemente el cifrado de César, una
//técnica de cifrado simple en la que cada letra del texto original se desplaza 
//un número fijo de posiciones en el alfabeto.
//Se tomara un cifrado de 5 espacios de letra


export default function cifradoCesar(btnCifrar, btnLimpiar, textArea, resultado){


    const $btnCifrar = document.querySelector(btnCifrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    let textoCifrado = "";

    let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","W","X","Y","Z"];

    $btnCifrar.addEventListener("click", () => {

        const $textArea = document.querySelector(textArea).value.toUpperCase();

        const arrayArea = $textArea.split("");

        textoCifrado = "";
        //console.log(arrayArea);

        for(let i = 0; i < arrayArea.length; i++){
            let indice = alfabeto.indexOf(arrayArea[i])
            //console.log(indice);
            
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
            textoCifrado += alfabeto[indice +5];
             
        }

        $resultado.textContent = `El texto cifrado es: ${textoCifrado}`;
        //console.log(textoCifrado);

    });

    $btnLimpiar.addEventListener("click", () => {
        document.querySelector(textArea).value = " ";
        $resultado.textContent = " ";
    });  


}






