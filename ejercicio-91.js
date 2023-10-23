
//91. Factorial recursivo: Implementa una función recursiva para 
//calcular el factorial de un número.

//factorial se define como el producto de todos los num anteriores o iguales a el 
export default function factorialRecursivo(inputNum, btnCalcular, btnLimpiar, resultado){

//creando variables referenciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    
    //funcion recursiva que calcula el factorial de un numero pasado por parametro
    const calcularFact = (num) => {
        //si es 0 o 1, el factorial es 1
        if(num === 0 || num === 1){
            return 1;
        }else{        
            //aplica la recursion
            return num * calcularFact(num - 1);
        }        
    }
    
    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
        //toma el valor ingresado por el usuario
        const $inputNum = document.querySelector(inputNum).value;
        //console.log($inputNum);
        //muestra el resultado en el DOM
        $resultado.textContent = `El factorial es: ${calcularFact($inputNum)}`;
    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM
        $resultado.textContent = "";
        document.querySelector(inputNum).value = "";
    });

}



