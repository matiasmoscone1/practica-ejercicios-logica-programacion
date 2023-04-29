//3. Escribir un programa que lea un número entero y determine si es primo.

export default function numeroPrimo(numero, btn, resultado){

    const $btn = document.querySelector(btn);

    const $resultadoPrimo = document.querySelector(resultado);    

    $btn.addEventListener("click", () => {
        const $numeroPrimo = parseInt(document.querySelector(numero).value);
        let resultado = "";

        if($numeroPrimo <= 1){
            resultado = "no es primo";
        }else{
            resultado = "es primo";
            //son todos numeros primos excepto, los que son divisbles por algun numero mas
            //que por que por ellos mismos y por 1.
            for(let i = 2; i <= Math.sqrt($numeroPrimo); i++){
                if($numeroPrimo % i === 0){
                    resultado = "no es primo";
                    break;
                }
            }                
        }

        $resultadoPrimo.textContent = `El numero ${$numeroPrimo} ${resultado}`;

    });

}


