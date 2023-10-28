
//93. Currying: Implementa una función que convierta una función de varios argumentos 
//en una secuencia de funciones que toman un solo argumento.

export default function currying(inputNum, btnCalcular, btnLimpiar, resultado){

    //creando variables referneciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const curry = (func) => {
        return function curried(...argumentos){
            if(argumentos.length >= func.length){
                return func(...argumentos);
            }else{
                return (...masArgumentos) => curried(...argumentos, ...masArgumentos);
            }
            
        }
    }

    //creando una funcion de suma, que se le pasa por paraemtro 3 argumentos, y devuelve el resultado
    const suma = (a, b, c) => {
        return parseInt(a) + parseInt(b) + parseInt(c);
    }


    $btnCalcular.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;

        const currySuma = curry(suma);

        const suma1 = currySuma($inputNum);
        const suma2 = suma1(10);
        const resultado = suma2(10);
        console.log(resultado);

    });

    $btnLimpiar.addEventListener("click", () => {
        document.querySelector(inputNum).value = "";
        $resultado.textContent = "";
    });



}



