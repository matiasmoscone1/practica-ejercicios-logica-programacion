




//52. Calculadora de expresiones matemáticas: Crea una calculadora que pueda evaluar y resolver 
//expresiones matemáticas básicas, como sumas, restas, multiplicaciones y divisiones.

export default function calculadoraMatematica(btnSuma, btnResta, btnMult, btnDivi, input1, input2, resultado){

    const $resultado = document.querySelector(resultado);
    const $contenedor = document.querySelector(".container-ej-52");
    let result = 0;
    
    $contenedor.addEventListener("click", (e) => {
        const $input1 = parseInt(document.querySelector(input1).value);
        const $input2 = parseInt(document.querySelector(input2).value);
        if(e.target.matches(btnSuma)){
            result = $input1 + $input2;
        }
        if(e.target.matches(btnResta)){
            result = $input1 - $input2;
        }
        if(e.target.matches(btnMult)){
            result = $input1 * $input2;    
        }
        if(e.target.matches(btnDivi)){
            result = $input1 / $input2;
        }
        $resultado.textContent = `El resultado es: ${result}`;
    });

}


