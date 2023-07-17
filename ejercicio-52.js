

//52. Calculadora de expresiones matemáticas: Crea una calculadora que pueda evaluar y resolver 
//expresiones matemáticas básicas, como sumas, restas, multiplicaciones y divisiones.

export default function calculadoraMatematica(btnSuma, btnResta, btnMult, btnDivi, btnLimpiar, input1, input2, resultado){

    //Creando variables referenciales al Dom
    const $resultado = document.querySelector(resultado);
    const $contenedor = document.querySelector(".container-ej-52");
    //Creando variable resultado
    let result = 0;
    
    //Captando evento click de la div Contenedor
    $contenedor.addEventListener("click", (e) => {
        //tomando los valores de los input escritos por usuario
        const $input1 = parseInt(document.querySelector(input1).value);
        const $input2 = parseInt(document.querySelector(input2).value);
        //Si el evento click coincide con el boton suma, resta, multi, divi realiza tal calculo
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
        //Mostrando resultado en el DOM
        $resultado.textContent = `El resultado es: ${result}`;
        //Si el evento click coincide con el boton limpiar, limpia el DOM y los inputs 
        if(e.target.matches(btnLimpiar)){
            $resultado.textContent = "";
            document.querySelector(input1).value = "";
            document.querySelector(input2).value = "";
        }        
    });

}


