

//30. Escribe un programa que genere los primeros n números primos. 
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.

function esPrimo(numero){

    if(numero < 2){
        return false;
    }
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
}


export default function generarNumerosPrimos(inputNumeros, btnGenerar, btnLimpiar, resultado){

    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoGenNumerosPrimos = document.querySelector(resultado);

    $btnGenerar.addEventListener("click", () => {
        const $inputNumeros = document.querySelector(inputNumeros).value;
        let arrayNumeros = [];
        let contador = 2;
        /*while(arrayNumeros.length < $inputNumeros){
            if(esPrimo(contador)){
                arrayNumeros.push(contador);
            }
            contador++; 
        }*/

        
        //console.log(arrayNumeros);

    });



}
