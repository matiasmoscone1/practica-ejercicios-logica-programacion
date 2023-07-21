


//55. Calculadora de propinas: Crea una calculadora que calcule automáticamente el monto 
//de la propina en función del porcentaje deseado y el monto de la cuenta.

export default function calculadoraPropinas(inputMonto, inputPorcentaje, btnCalcular, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton calcular
    $btnCalcular.addEventListener("click", () => {

        //tomando el valor de los input del dom escritos por el usuario
        const $inputMonto = document.querySelector(inputMonto).value;
        const $inputPorcentaje = document.querySelector(inputPorcentaje).value;
        //creando variable propina que guardara el valor del calculo para la propina
        let propina = 0;

        //calculando el valor de la propina
        propina = $inputPorcentaje * $inputMonto / 100;

        //console.log(propina);

        //mostrando resultado en DOM
        $resultado.textContent = `La propina debe ser: $${propina}`
        //console.log($inputMonto, $inputPorcentaje);

    });

    //captando evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpiando el resultado en el DOM
        $resultado.textContent = "";
    });


}








