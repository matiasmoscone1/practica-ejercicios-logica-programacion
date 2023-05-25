
//17. Escribir un programa que determine el factorial de un numero.

export default function factorial(input, btn, resultado){

    const $btnFactorial = document.querySelector(btn);

    const $resultadoFactorial = document.querySelector(resultado);

    $btnFactorial.addEventListener("click", () => {
        const $inputFactorial = document.querySelector(input).value;
        let res = 1;

        //console.log($inputFactorial);
        for(let i = 1; i <= $inputFactorial; i++){
            res *= i;
            //console.log(i);
        }

        $resultadoFactorial.textContent = `El resultado es: ${res}`

    });


}

