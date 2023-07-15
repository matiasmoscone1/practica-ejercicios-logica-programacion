


//50. Ejercicio de adivinanza: Escribe un programa que genere un número aleatorio entre 1 y 100. 
//Luego, solicita al usuario que adivine el número generado, ingresando su intento por teclado.
//El programa debe indicar si el número ingresado es mayor, menor o igual al número generado,
//y permitir al usuario seguir intentando hasta adivinar correctamente.


export default function adivinaElNumero(btnGenerar, btnLimpiar, formulario, inputForm, resultado){

    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    const $formulario = document.querySelector(formulario);
    const $resultado = document.querySelector(resultado);

    let generarNum = "";

    $btnGenerar.addEventListener("click", () => {
        generarNum = parseInt(Math.random(0, 10) * 10);
        console.log(generarNum);


    });

    $formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const $inputForm = document.querySelector(inputForm).value;
        console.log($inputForm);
        console.log(generarNum);
        if(parseInt($inputForm) === generarNum){
            console.log("HAS ADIVINADO EL NUMERO!");
        }else{
            console.log("NO ADIVINASTE EL NUMERO");
        }

    });


}









