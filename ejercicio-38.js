

//38. Contador con flecha hacia arriba sube, flecha hacia abajo resta, 
//apretando otra tecla resetea contador.

export default function contadorTeclado(btnJugar, btnStop, resultado){

    //Inicializando variables del DOM
    const $btnJugar = document.querySelector(btnJugar);
    const $btnStop = document.querySelector(btnStop);
    const $resultado = document.querySelector(resultado);
    //Inicializando variables contador y bloqActivo -> Si es true se puede jugar, si es false no.
    let bloqActivo = false;
    let contador = 0;

    //Captando evento click del boton Jugar
    $btnJugar.addEventListener("click", () => {
        //Ponemos en bloqActivo en true
        bloqActivo = true;

        //Si bloqActivo es true, captamos el evento de teclado
        if(bloqActivo){
            document.addEventListener("keydown", (e) => {
                //Si la tecla presionada es la flechita arriba, el contador suma 1
                if(e.key === "ArrowUp"){
                    contador += 1;
                }
                //Si la tecla presionada es la flechita abajo, el contador resta 1
                if(e.key === "ArrowDown"){
                    contador -= 1;
                }
                //Muestra por DOM el resultado cada vez q cambia                
                $resultado.textContent = `Contador: ${contador}`;
            });
        }
    });

    //Captando evento click del boton Stop, pone el bloqActivado en false y limpia el resultado en el DOM
    $btnStop.addEventListener("click", () => {
        bloqActivo = false;
        $resultado.textContent = "";
    });

}

