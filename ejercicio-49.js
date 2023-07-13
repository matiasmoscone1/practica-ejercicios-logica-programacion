

//49. Ejercicio de conversión de unidades: Realiza un programa que solicite al usuario 
//ingresar una cantidad en metros por teclado. Luego, el programa debe convertir esa 
//cantidad a kilómetros, centímetros y millas, y mostrar los resultados.

export default function convertirMetros(inputMetros, btnKilometros, btnCentimetros, btnMillas, resultado){

    //creando variable referencial al DOM (resultado)
    const $resultado = document.querySelector(resultado);

    //captando evento click del DOM
    document.addEventListener("click", (e) => {

        //tomando el valor escrito por el usuario en el input 
        const $inputMetros = document.querySelector(inputMetros).value;

        //creando variable que se almacenara el resultado del calculo aca
        let calculo = 0;

        //console.log($inputMetros);

        //Si el "click" matchea con el boton de Kilometros, realiza el calculo correspondiente 
        if(e.target.matches(btnKilometros)){
            calculo = $inputMetros / 1000;
            //muestra el resultado en el DOM
            $resultado.textContent = `${$inputMetros} metros = ${calculo} kilometros`;
            //console.log(calculo);    
        }
        //Si el "click" matchea con el boton de Centimetros, realiza el calculo correspondiente
        if(e.target.matches(btnCentimetros)){
            calculo = $inputMetros * 100;
            //muestra el resultado en el DOM
            $resultado.textContent = `${$inputMetros} metros = ${calculo} centimetros`;
            //console.log(calculo);
        }
        //Si el "click" matchea con el boton de Millas, realiza el calculo correspondiente
        if(e.target.matches(btnMillas)){
            calculo = $inputMetros / 1609;
            //muestra el resultado en el DOM
            $resultado.textContent = `${$inputMetros} metros = ${calculo} millas`;
            //console.log(calculo);
        }

    });
    
}







