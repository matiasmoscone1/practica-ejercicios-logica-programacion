

//38. Contador con flecha hacia arriba sube, flecha hacia abajo resta, 
//apretando otra tecla resetea contador.


export default function contadorTeclado(btnJugar, btnStop, resultado){

    const $btnJugar = document.querySelector(btnJugar);
    const $btnStop = document.querySelector(btnStop);
    const $resultado = document.querySelector(resultado);
    let bloqActivo = false;
    let contador = 0;

    $btnJugar.addEventListener("click", () => {
        bloqActivo = true;

        if(bloqActivo){
            document.addEventListener("keydown", (e) => {
                if(e.key === "ArrowUp"){
                    contador += 1;
                }
                if(e.key === "ArrowDown"){
                    contador -= 1;
                }
                
                $resultado.textContent = `${contador}`;
            });

        }
    });

    $btnStop.addEventListener("click", () => {
        bloqActivo = false;
        $resultado.textContent = "";
    });

}

