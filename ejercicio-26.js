


//26. Verificación de números perfectos: Escribe una función que
//determine si un número dado es un número perfecto.


//Un número perfecto es un número entero 
//positivo que es igual a la suma de sus divisores propios positivos.


export default function numeroPerfecto(numero, btn, resultado){

    //Creando variables de referencia del DOM
    const $btnNumeroPerfecto = document.querySelector(btn);
    const $resultadoNumeroPerfecto = document.querySelector(resultado);

    //Captando evento click del boton verificar si es perfecto el numero o no
    $btnNumeroPerfecto.addEventListener("click", () => {
        //Tomando el valor del numero escrito por el usuario
        const $numeroInput = document.querySelector(numero).value;

        
        //console.log(Object(Number($numeroInput)));

        // numeroPerfecto = (2 ** ($numeroInput - 1)) * ((2 ** $numeroInput) - 1); 
        
        //Creando variable que se acumulara por cada divisor del numero
        let sumaDivisores = 0;
        //Ciclo que recorre la mitad del numero para saber si es perfecto o no
        for(let i = 1; i <= $numeroInput/2; i++){
            //Si el numero es divisible por el iterador se el iterador a la variable sumaDivisores
            if($numeroInput % i === 0){
                sumaDivisores += i;
            }
        }

        //Operador ternario que define si es igual la suma de divisores acumulada en el ciclo for
        //con el numero escrito por teclado del usuario. Si es igual significa que es perfecto.
        (sumaDivisores === Number($numeroInput)) 
        ? $resultadoNumeroPerfecto.textContent = `"${$numeroInput}" Es un numero perfecto` 
        : $resultadoNumeroPerfecto.textContent = `"${$numeroInput}" No es un numero perfecto`;

       
        //console.log(sumaDivisores);

    });


}