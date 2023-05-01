

//6. Escribir un programa que lea un número entero y determine cuántos dígitos tiene.

export default function determinarDigitos(btn, resultado){

    const $btnDigitos = document.querySelector(btn);
    const $resultadoDigitos = document.querySelector(resultado);

    let contadorDigitos = 0;


    document.addEventListener("keyup", (e) => {
        
        //Expresion regular para verificar si la tecla presionada es un numero
        if(/\d/.test(e.key)){
            contadorDigitos++;
        }
    });

    $btnDigitos.addEventListener("click", () => {

        $resultadoDigitos.textContent = `El numero tiene: ${contadorDigitos} digitos`;

    });

  





}

