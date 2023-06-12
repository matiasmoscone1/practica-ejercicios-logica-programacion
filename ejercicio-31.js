


//31. Conversión de números romanos: Escribe una función que reciba un número romano 
//y lo convierta a su equivalente en números arábigos. Los números romanos se representan
// utilizando las siguientes letras: I, V, X, L, C, D, M, que representan los 
//valores 1, 5, 10, 50, 100, 500, 1000 respectivamente. Por ejemplo, el número romano "XXIV" se convierte en 24.


export default function conversionNumerosRomanos(inputRomanos, btnConvertir, btnLimpiar, resultado){

    const $btnConvertir = document.querySelector(btnConvertir);
    const $btnLimpiar = document.querySelector(btnLimpiar)
    const $resultadoNumerosRomanos = document.querySelector(resultado);


    $btnConvertir.addEventListener("click", () => {
        const $inputNumRomano = document.querySelector(inputRomanos).value;

        let cadenaRomanos = $inputNumRomano.split("");

        console.log(cadenaRomanos);
        let acumulador = 0;


        for(let i = 0; i < cadenaRomanos.length; i++){
            
            let valorActual = cadenaRomanos[i];
            let valorSiguiente = cadenaRomanos[i+1];

            switch(valorActual){
                case "I": acumulador += 1;
                break;
                case "V": acumulador += 5;
                break;
                case "X": acumulador += 10;
                break;
                case "L": acumulador += 50;
                break;
                case "C": acumulador += 100;
                break;
                case "D": acumulador += 500;
                break;
                case "M": acumulador += 1000;
                break;
            }
            
            if(valorSiguiente && valorActual < valorSiguiente){
                acumulador -= valorActual;
            }else{
                acumulador += valorActual;
            }


        }

        console.log(acumulador);
        

       

    });

}




