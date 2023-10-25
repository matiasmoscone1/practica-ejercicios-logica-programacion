
//92. Composición de funciones: Escribe una función que tome una serie de funciones y 
//las componga en una sola función.

export default function composicionFunciones(inputNum, btnCalcular, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando funcion superior que engloba las demas funciones, se le pasa un arreglo de funciones
    const funcionComp = (...funcion) => {
        //console.log(funcion);
        //retorna una callback donde se le pasa por parametro el input
        return(input) => {
            //y esta callback retorna el resultado de las funciones, se inicializa acc con el valor del
            //input y por cada funcion se le pasa por parametro el resultado de la funcion anterior
            return funcion.reduce((acc, func) => func(acc), input);
        }
    } 

    //funcion suma
    const sumarNum = (num) => {
        return (num + 5);
    }

    //funcion resta
    const restarNum = (num) => {
        return (num - 2);
    }
   //funcion multiplicacion
    const multNum = (num) => {
        return (num * 10);
    }
   //funcion division
    const divNum = (num) => {
        return (num / 2);
    }


    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
        //tomando el valor escrito por el usuario en una variable referencial al DOM
        const $inputNum = document.querySelector(inputNum).value;

        //const res = funcionComp(sumarNum, restarNum, multNum, divNum);

        //Orden de composicion de funciones
        const res = funcionComp(divNum, multNum, restarNum, sumarNum);

        //guarda en una constante el resultado de la funcion superior, se le pasa como input el valor
        //ingresado por el usuario 
        const resultado = res($inputNum);

        //muestra el resultado en el DOM
        $resultado.textContent = `El resultado es: ${resultado}`;

    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpiando el DOM
        document.querySelector(inputNum).value = "";
        $resultado.textContent = "";
    });


}

