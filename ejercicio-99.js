
//99. Cálculo de números primos: Escribe una función que genere números primos utilizando 
//programación funcional. Puedes utilizar un generador o una función que genere una 
//secuencia infinita de números y luego use filter para encontrar los números primos.


export default function generadorPrimos(numeros, input, btnGenerar, btnFiltrar, btnLimpiar, resultado){

    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $btnGenerar = document.querySelector(btnGenerar);
    const $numeros = document.querySelector(numeros);
    const $resultado = document.querySelector(resultado);


    const generaNumeros = (num) => {
        let acc = 0;
        for(let i = 0; i <= num.length; i++){
            acc = i;
        }
        return acc;
    }

    const $inputNum = document.querySelector(input).value;
    generaNumeros($inputNum);

}

