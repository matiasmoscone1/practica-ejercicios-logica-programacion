
//93. Currying: Implementa una función que convierta una función de varios argumentos 
//en una secuencia de funciones que toman un solo argumento.

export default function currying(inputNum, btnCalcular, btnLimpiar, resultado){

    //creando variables referneciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //toma una funcion llamada func y devuelve una nueva funcion llamada curried
    const curry = (func) => {
        return function curried(...argumentos){
            //si el numero de argumentos es mayor o igual al numero de argumentos esperados, se llama
            //a func con esos argumentos        
            if(argumentos.length >= func.length){
                return func(...argumentos);
            //sino se devuelve una funcion que recibe mas argumentos y se acumula hasta q se cumpla la condicion
            }else{
                return (...masArgumentos) => curried(...argumentos, ...masArgumentos);
            }
            
        }
    }

    //creando una funcion de suma, que se le pasa por paraemtro 3 argumentos, y devuelve el resultado
    const suma = (a, b, c) => {
        return parseInt(a) + parseInt(b) + parseInt(c);
    }


    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
        //tomando el valor del input escrito por el usuario
        const $inputNum = document.querySelector(inputNum).value;

        //se crea constante que llama a la funcion curry pasandole la funcion de suma
        const currySuma = curry(suma);

        //crea constante que llama a la constante anterior creada
        const suma1 = currySuma($inputNum);
        //crea nueva constante que llama a la constante creada recien y se le pasa por parametro un numero
        const suma2 = suma1(10);
        //crea la constnte resultado y repite el mismo paso
        const resultado = suma2(10);
        //console.log(resultado);
      
        //muestra el resultado en el DOM
        $resultado.textContent = `El resultado es: ${resultado}`;

    });

    //capta evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM
        document.querySelector(inputNum).value = "";
        $resultado.textContent = "";
    });


}



