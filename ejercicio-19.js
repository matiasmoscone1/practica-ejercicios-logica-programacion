

//19. Fibonacci: Escribe una función que genere los primeros n números de la secuencia de Fibonacci.
//La secuencia de Fibonacci se crea sumando los dos números anteriores para obtener el siguiente número. 
//Los primeros números de la secuencia son 0, 1, 1, 2, 3, 5, 8, 13, 21, y así sucesivamente.


export default function fibonacci(btn,resultado){

    //Creando variables del DOM
    const $btnFibonacci = document.querySelector(btn);
    const $resultadoFibonacci = document.querySelector(resultado);

    //Captando evento click del boton Mostrar del DOM
    $btnFibonacci.addEventListener("click", () => {
        //Creando array de fibonacci con los 2 primeros elementos y numero que sera sumado de
        //los dos ultimos numeros del array
        let fib = [0,1];
        let num = 0;
        //Ciclo for que genera 20 numeros sumando los 2 ultimos numeros del array
        for(let i = 0; i < 20; i++){
            //Suma los 2 ultimos numeros del array e inserta la suma en el array
            num = fib[fib.length -1] + fib[fib.length -2];
            fib.push(num);
            
        }
        //console.log(fib);
        //Mostrando el resultado del array en forma de oracion separado con una coma.
        $resultadoFibonacci.textContent = `La suceccion fibonacci es: ${fib.join(", ")}`;

    });


}


