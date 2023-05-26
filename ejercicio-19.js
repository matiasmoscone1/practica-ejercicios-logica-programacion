

//19. Fibonacci: Escribe una función que genere los primeros n números de la secuencia de Fibonacci.
//La secuencia de Fibonacci se crea sumando los dos números anteriores para obtener el siguiente número. 
//Los primeros números de la secuencia son 0, 1, 1, 2, 3, 5, 8, 13, 21, y así sucesivamente.


export default function fibonacci(btn,resultado){

    const $btnFibonacci = document.querySelector(btn);
    const $resultadoFibonacci = document.querySelector(resultado);

    $btnFibonacci.addEventListener("click", () => {
        let fib = [0,1];
        let num = 0;
        for(let i = 0; i < 20; i++){
            num = fib[fib.length -1] + fib[fib.length -2];
            fib.push(num);
            
        }
        console.log(fib);
        $resultadoFibonacci.textContent = `La suceccion fibonacci es: ${fib.join(", ")}`;
        
    });


}


