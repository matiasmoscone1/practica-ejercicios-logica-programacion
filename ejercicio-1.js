
//1. Escribir un programa que lea un número entero y determine si es par o impar.


export default function numeroParImpar(numero, btnParImpar, resultadoParImpar) {
    const $btn = document.querySelector(btnParImpar);

    const $resultadoParImpar = document.querySelector(resultadoParImpar);

    $btn.addEventListener("click", () => {
      
        const $numero = parseInt(document.querySelector(numero).value);
        let resultado = "";
      
        if($numero % 2 === 0){
            resultado = "par";
        }else{
            resultado = "impar";
        }

        //console.log(resultado);
        $resultadoParImpar.textContent = `El numero ${$numero} es: ${resultado}`;
    });
  
}