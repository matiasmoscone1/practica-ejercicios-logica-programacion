
//93. Currying: Implementa una función que convierta una función de varios argumentos 
//en una secuencia de funciones que toman un solo argumento.

export default function currying(inputNum, btnCalcular, btnLimpiar, resultado){

    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const curry = (func) => {
        return curried = (...argumentos) => {
            if(argumentos.length >= func.length){
                return func(...argumentos);
            }else{
                return (...masArgumentos) => curried(...argumentos, ...masArgumentos);
            }
            
        }
    }

    const suma = (a, b, c) => {
        return a + b + c;
    }


    $btnCalcular.addEventListener("click", () => {



    });



}



