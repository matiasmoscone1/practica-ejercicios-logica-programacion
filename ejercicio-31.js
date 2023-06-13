


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

        const valoresRomanos = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };

        for(let i = 0; i < cadenaRomanos.length; i++){
            
            let valorActual = valoresRomanos[cadenaRomanos[i]];
            let valorSiguiente = valoresRomanos[cadenaRomanos[i+1]];
            
            if(valorSiguiente && valorActual < valorSiguiente){
                acumulador += valorActual;
            }else{
                acumulador -= valorActual;
            }
        }

        console.log(-acumulador);
        
        $resultadoNumerosRomanos.innerHTML = `El resultado en decimal es: ${-acumulador}`;
       
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultadoNumerosRomanos.innerHTML = "";
    });

}




