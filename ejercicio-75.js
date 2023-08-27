


//75. Implementa una función recursiva para calcular el factorial de un número.


export default function factRecursiva(btnCalcular, btnLimpiar, input, resultado){

    //Creando variables referenciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //Creando funcion recursiva que recibe como parametro un numero
    const factNum = (num) => {
        //si el numero es 0 o 1, retornara 1. Tambien es la "base" de la funcion recursiva, 
        //es decir, cuando la recursion llegue a 1, comenzara a hacer la vuelta del stack
        if(num === 0 || num === 1){
            return 1;
        }
        //multiplica el numero pasado como parametro por el numero que devolvera la funcion
        //con el parametro rebajado en 1
        else{
            return num *= factNum(num - 1);
        }
    }


    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
        //tomando el valor del input escrito por el usuario
        const $input = document.querySelector(input).value;

        //creando variable res -> que significa el resultado de la funcion recurisva con el
        //numero del input pasado como parametro
        const res = factNum($input);

        //muestra el resultado en el DOM
        $resultado.textContent = `Resultado: ${res}`

    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el input del usuario, el resultado del DOM y la consola
        document.querySelector(input).value = "";
        $resultado.textContent = "";
        console.clear();
    });

    //console.log(factNum(5));

}







