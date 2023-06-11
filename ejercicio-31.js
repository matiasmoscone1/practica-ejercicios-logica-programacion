


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


        for(let i = 0; i <= cadenaRomanos.length; i++){
            
            switch(cadenaRomanos[i]){
                case "I": 1;
                case "V": 5;
                case "X": 10;
                case "L": 50;
                case "C": 100;
                case "D": 500;
                case "M": 1000;
            }
            acumulador+= i;
        }

        console.log(acumulador);
        

       

    });

}




