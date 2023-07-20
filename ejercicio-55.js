


//55. Calculadora de propinas: Crea una calculadora que calcule automáticamente el monto 
//de la propina en función del porcentaje deseado y el monto de la cuenta.

export default function calculadoraPropinas(inputMonto, inputPorcentaje, btnCalcular, btnLimpiar, resultado){


    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnCalcular.addEventListener("click", () => {

        const $inputMonto = document.querySelector(inputMonto).value;
        const $inputPorcentaje = document.querySelector(inputPorcentaje).value;
        let propina = 0;

        propina = $inputPorcentaje * $inputMonto / 100;

        console.log(propina);

        $resultado.textContent = `La propina debe ser: $${propina}`
        //console.log($inputMonto, $inputPorcentaje);

    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
    });


}








