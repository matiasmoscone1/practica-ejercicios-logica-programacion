

//30. Escribe un programa que genere los primeros n números primos. 
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.

//Creando funcion para verificar si un numero es primo o no
function esPrimo(numero){

    if(numero < 2){
        return false;
    }
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}


export default function generarNumerosPrimos(inputNumeros, btnGenerar, btnLimpiar, resultado){
    //Creando variables referenciales al DOM
    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoGenNumerosPrimos = document.querySelector(resultado);

    //Captando evento click del boton generar numeros primos
    $btnGenerar.addEventListener("click", () => {
        //tomandoe el valor del input del usuario para la cantidad de numeros primos a generar
        const $inputNumeros = parseInt(document.querySelector(inputNumeros).value);

        //creando un array vacio donde pondremos todos los numeros primos
        let arrayNumeros = [];

        //ciclo for que recorre numero a numero hasta completar el numero puesto por el usuario
        //por cada numero va verificando si es primo o no y si lo es lo pone en el array
        for(let j = 0; j <= $inputNumeros; j++){
            if(esPrimo(j)){
                arrayNumeros.push(j);
            }
        }
        //console.log(arrayNumeros);
        
        //Mostrando por el DOM los numeros primos generados
        $resultadoGenNumerosPrimos.textContent = `Los numeros primos generados son: ${arrayNumeros.toString()}`;        

    });

    //captando boton limpiar para limpiar el dom
    $btnLimpiar.addEventListener("click", () => {
        $resultadoGenNumerosPrimos.innerHTML = "";
    });

}
