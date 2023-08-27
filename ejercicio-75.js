


//75. Implementa una función recursiva para calcular el factorial de un número.


export default function factRecursiva(btnCalcular, btnLimpiar, input, resultado){

    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const factNum = (num) => {
        if(num === 0 || num === 1){
            return 1;
        }
        else{
            return num *= factNum(num - 1);
        }
    }


    $btnCalcular.addEventListener("click", () => {
        const $input = document.querySelector(input).value;

        const res = factNum($input);

        $resultado.textContent = `Resultado: ${res}`

    });



    //console.log(factNum(5));

}







