

//49. Ejercicio de conversión de unidades: Realiza un programa que solicite al usuario 
//ingresar una cantidad en metros por teclado. Luego, el programa debe convertir esa 
//cantidad a kilómetros, centímetros y millas, y mostrar los resultados.

export default function convertirMetros(inputMetros, btnKilometros, btnCentimetros, btnMillas, resultado){

    const $resultado = document.querySelector(resultado);

    document.addEventListener("click", (e) => {

        const $inputMetros = document.querySelector(inputMetros).value;

        let calculo = 0;

        //console.log($inputMetros);

        if(e.target.matches(btnKilometros)){
            calculo = $inputMetros / 1000;
            console.log(calculo);    
        }
        if(e.target.matches(btnCentimetros)){
            calculo = $inputMetros * 100;
            console.log(calculo);
        }
        if(e.target.matches(btnMillas)){
            calculo = $inputMetros / 1609;
            console.log(calculo);
        }

    });



    
}







