



//47.Ejercicio de búsqueda de palabras: Escribe un programa que solicite al usuario ingresar 
//una oración y una palabra por teclado. Luego, el programa debe contar cuántas veces 
//aparece esa palabra en la oración ingresada y mostrar el resultado.


export default function buscarPalabra(textArea, inputPalabra, btnBuscar, btnLimpiar, resultado){


    const $btnBuscar = document.querySelector(btnBuscar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnBuscar.addEventListener("click", () => {
        const $textArea = document.querySelector(textArea).value;
        const $inputPalabra = document.querySelector(inputPalabra).value;
        let contador = 0;

        //console.log($inputPalabra);
        let arrayOracion = $textArea.split(" ");
        //console.log(arrayOracion);

        for(let i = 0; i < arrayOracion.length; i++){
            if($inputPalabra === arrayOracion[i]){
                contador++; 
            }
        }
        //console.log(contador);

        $resultado.textContent = `La palabra "${$inputPalabra}" se repite: ${contador} veces`;



    });
    
}





