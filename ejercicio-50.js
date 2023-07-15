


//50. Ejercicio de adivinanza: Escribe un programa que genere un número aleatorio entre 1 y 100. 
//Luego, solicita al usuario que adivine el número generado, ingresando su intento por teclado.
//El programa debe indicar si el número ingresado es mayor, menor o igual al número generado,
//y permitir al usuario seguir intentando hasta adivinar correctamente.


export default function adivinaElNumero(btnGenerar, btnLimpiar, formulario, inputForm, resultado){

    //Creando variables referenciales al DOM
    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $formulario = document.querySelector(formulario);
    const $resultado = document.querySelector(resultado);

    //Creando variable para generar el numero a adivinar
    let generarNum = "";

    //captando evento click del boton Generar, genera un numero aleatorio entre 0 y 9
    $btnGenerar.addEventListener("click", () => {
        generarNum = parseInt(Math.random(0, 10) * 10);
        //console.log(generarNum);
    });

    //captando evento submit del formulario
    $formulario.addEventListener("submit", (e) => {
        //previniendo evento por defecto para que no mande la request
        e.preventDefault();
        //tomando el valor del input escrito por el usuario
        const $inputForm = document.querySelector(inputForm).value;
        //console.log($inputForm);
        //console.log(generarNum);
        //Se lo transforma a "number" al valor escrito por usuario y se lo compara con el
        //numero generado
        if(parseInt($inputForm) === generarNum){
            //console.log("HAS ADIVINADO EL NUMERO!");
            //Muestra resultado por DOM
            $resultado.textContent = "HAS ADIVINADO EL NUMERO!";
        }else{
            //console.log("NO ADIVINASTE EL NUMERO");
            //Muestra resultado por DOM
            $resultado.textContent = "NO ADIVINASTE EL NUMERO";
        }
    });

    //captando evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpia input, DOM y consola
        document.querySelector(inputForm).value = "";
        $resultado.textContent = "";
        console.clear();
    });


}










