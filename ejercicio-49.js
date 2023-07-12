

//49. Ejercicio de conversión de unidades: Realiza un programa que solicite al usuario 
//ingresar una cantidad en metros por teclado. Luego, el programa debe convertir esa 
//cantidad a kilómetros, centímetros y millas, y mostrar los resultados.

export default function convertirMetros(inputMetros, btnKilometros, btnCentimetros, btnMillas, resultado){

    
    document.addEventListener("click", (e) => {

        const $inputMetros = document.querySelector(inputMetros).value;

        console.log($inputMetros);

        if(e.target.matches(btnKilometros)){
            
        }
        if(e.target.matches(btnCentimetros)){

        }
        if(e.target.matches(btnMillas)){

        }

    });



    
}







