


//31. Conversión de números romanos: Escribe una función que reciba un número romano 
//y lo convierta a su equivalente en números arábigos. Los números romanos se representan
// utilizando las siguientes letras: I, V, X, L, C, D, M, que representan los 
//valores 1, 5, 10, 50, 100, 500, 1000 respectivamente. Por ejemplo, el número romano "XXIV" se convierte en 24.


export default function conversionNumerosRomanos(inputRomanos, btnConvertir, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnConvertir = document.querySelector(btnConvertir);
    const $btnLimpiar = document.querySelector(btnLimpiar)
    const $resultadoNumerosRomanos = document.querySelector(resultado);


    //Captando evento click del boton Convertir
    $btnConvertir.addEventListener("click", () => {
        //Tomando valor del input escrito por el usuario
        const $inputNumRomano = document.querySelector(inputRomanos).value;

        //dividiendo la cadena de texto escrita x el usuario en un array para luego recorrerlo
        let cadenaRomanos = $inputNumRomano.split("");

        //console.log(cadenaRomanos);
        //creando variable acumulador que guardara el resultado final
        let acumulador = 0;

        //creando objeto con las letras romanas y sus respectivos valores
        const valoresRomanos = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };

        //recorriendo el array creado a partir de la cadena de texto ingresada x el usuario
        for(let i = 0; i < cadenaRomanos.length; i++){
            //valorActual = referencia la letra romana actual que esta leyendo el ciclo
            //valorSiguiente = referencia la letra romana siguiente del ciclo
            let valorActual = valoresRomanos[cadenaRomanos[i]];
            let valorSiguiente = valoresRomanos[cadenaRomanos[i+1]];
            
            //Si valor siguiente existe y el valorActual es menor al valorSiguiente, 
            //le restamos al acumulador el valor actual (propiedad de nros romanos),
            //si el valorActual es mayor al valorSiguiente, se le suma simplemente al acumulador
            if(valorSiguiente && valorActual < valorSiguiente){
                acumulador -= valorActual;
            }else{
                acumulador += valorActual;
            }
        }

        //console.log(acumulador);
        
        //Mostrando en el DOM el resultado
        $resultadoNumerosRomanos.innerHTML = `El resultado en decimal es: ${acumulador}`;
       
    });

    //Captando evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpiando DOM
        $resultadoNumerosRomanos.innerHTML = "";
    });

}




