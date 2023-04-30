

//5. Escribir un programa contador de clicks.

//Enunciado modificado: Crear un programa incrementador, decrementador y reseteo de clicks.

export default function contarClicks(btnIncrementar, btnResetear, btnDecrementar, resultado){

    let contador = 0;
    const $resultadoContador = document.querySelector(resultado);

    $resultadoContador.textContent = 0;

    document.addEventListener("click", (e) => {
        if(e.target.matches(btnIncrementar)){        
            contador += 1;
        }
        else if(e.target.matches(btnResetear)){
            contador = 0;
        }else if(e.target.matches(btnDecrementar)){
            contador -= 1;
        }
            
        $resultadoContador.textContent = contador;
    });


}
