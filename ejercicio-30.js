

//30. Escribe un programa que genere los primeros n números primos. 
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.



export default function generarNumerosPrimos(inputNumeros, btnGenerar, btnLimpiar, resultado){


    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoGenNumerosPrimos = document.querySelector(resultado);

    $btnGenerar.addEventListener("click", () => {
        const $inputNumeros = document.querySelector(inputNumeros).value;
        let arrayNumeros = [];
        for(let i = 0; i <= $inputNumeros; i++){
            if((i / 1 === 0) && (i % i === 0)){
                arrayNumeros.push(i);
            }
        }
        
        console.log(arrayNumeros);

    });



}
