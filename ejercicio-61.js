

//61. Cifrado de César: Escribe una función que implemente el cifrado de César, una
//técnica de cifrado simple en la que cada letra del texto original se desplaza 
//un número fijo de posiciones en el alfabeto.
//Se tomara un cifrado de 5 espacios de letra


export default function cifradoCesar(btnCifrar, btnLimpiar, textArea, resultado){


    const $btnCifrar = document.querySelector(btnCifrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    let textoCifrado = "";

    let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","W","X","Y","Z"];

    $btnCifrar.addEventListener("click", () => {

        const $textArea = document.querySelector(textArea).value.toUpperCase();

        const arrayArea = $textArea.split("");

        console.log(arrayArea);

        for(let i = 0; i < arrayArea.length; i++){
            let indice = alfabeto.indexOf(arrayArea[i])
            console.log(indice);
            textoCifrado += alfabeto[indice +5]; 
        }


        console.log(textoCifrado);


    });




}






