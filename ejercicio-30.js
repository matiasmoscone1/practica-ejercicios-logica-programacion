

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
    return true;
}


export default function generarNumerosPrimos(inputNumeros, btnGenerar, btnLimpiar, resultado){

    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoGenNumerosPrimos = document.querySelector(resultado);

    $btnGenerar.addEventListener("click", () => {
        const $inputNumeros = parseInt(document.querySelector(inputNumeros).value);

        //console.log(esPrimo(1));
        
        let arrayNumeros = [];

        for(let j = 0; j <= $inputNumeros; j++){
            if(esPrimo(j)){
                arrayNumeros.push(j);
            }
        }

        
        console.log(arrayNumeros);

    });



}
