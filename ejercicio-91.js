
//91. Factorial recursivo: Implementa una función recursiva para 
//calcular el factorial de un número.

//factorial se define como el producto de todos los num anteriores o iguales a el 
export default function factorialRecursivo(inputNum, btnCalcular, btnLimpiar, resultado){


    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    

    const calcularFact = (num) => {
        let res;
        res = num * num - 1;
        
    }


    $btnCalcular.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;
        console.log($inputNum);
        calcularFact($inputNum);

    });


}



