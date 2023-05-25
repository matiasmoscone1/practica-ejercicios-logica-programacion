
//17. Escribir un programa que determine el factorial de un numero.

export default function factorial(input, btn, resultado){

    // Creando variables del DOM
    const $btnFactorial = document.querySelector(btn);
    const $resultadoFactorial = document.querySelector(resultado);

    //Captando el evento click del boton verificar
    $btnFactorial.addEventListener("click", () => {
        //inicializando los valores del input que puso el usuario y el resultado
        const $inputFactorial = document.querySelector(input).value;
        let res = 1;

        //console.log($inputFactorial);
        //ciclo for que recorre todos los numeros hasta el numero del input y los multiplica
        for(let i = 1; i <= $inputFactorial; i++){
            res *= i;
            //console.log(i);
        }

        //mostrando a travez del DOM el resultado
        $resultadoFactorial.textContent = `El resultado es: ${res}`

    });


}

