


//36. Bloqueo de teclas: Crea un programa que permita bloquear ciertas teclas del teclado. 
//Al intentar presionar las teclas bloqueadas, no se debe reflejar ninguna acción.


export default function bloqueadorDeTeclas(btnJugar, btnStop, letras, input, btnLimpiarInput){

    const $letrasBloqueadas = document.querySelector(letras);
    const $inputTexto = document.querySelector(input);
    let bloqueoActivo = false;


    document.addEventListener("click", (e) => {

        if(e.target.matches(btnJugar)){
            $letrasBloqueadas.innerHTML = `Las letras bloqueadas son: A, H, K, Y, C`;              
            bloqueoActivo = true;
        }
        if(e.target.matches(btnStop)){
            $letrasBloqueadas.innerHTML = "";
            bloqueoActivo = false;  
        }
        if(e.target.matches(btnLimpiarInput)){
            $inputTexto.value = "";
        }
    });

    //IMPORTANTISIMO -> el evento "keyup" NO PUEDE BLOQUEAR LAS TECLAS
    //el evento "keydown" SI PUEDE BLOQUEAR LAS TECLAS
    $inputTexto.addEventListener("keydown", (e) => {
        if(bloqueoActivo){
            const letrasBloq = ["A", "H", "K", "Y", "C"];   
            if(letrasBloq.includes(e.key.toUpperCase())){
                e.preventDefault();
            }
        }
    });


}

