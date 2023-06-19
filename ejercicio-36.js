


//36. Bloqueo de teclas: Crea un programa que permita bloquear ciertas teclas del teclado. 
//Al intentar presionar las teclas bloqueadas, no se debe reflejar ninguna acción.


export default function bloqueadorDeTeclas(btnJugar, btnStop, letras, input, btnLimpiarInput){

    //Creando variables referenciales al DOM
    const $letrasBloqueadas = document.querySelector(letras);
    const $inputTexto = document.querySelector(input);
    //Inicializando variable para ver si el usuario esta jugando o si puso stop
    let bloqueoActivo = false;

    //Captando evento click del documento y viendo si matchea con los botones
    document.addEventListener("click", (e) => {

        //Matchea con boton Jugar, el bloqueo de teclas pasa a true y muestra en pantalla
        //las letras bloqueadas
        if(e.target.matches(btnJugar)){
            $letrasBloqueadas.innerHTML = `Las letras bloqueadas son: A, H, K, Y, C`;              
            bloqueoActivo = true;
        }
        //Matchea con boton Stop, el bloqueo de teclas pasa a false y limpia la pantalla
        //de las letras bloqueadas
        if(e.target.matches(btnStop)){
            $letrasBloqueadas.innerHTML = "";
            bloqueoActivo = false;  
        }
        //Matchea con el boton Limpiar al lado del input y limpia el input
        if(e.target.matches(btnLimpiarInput)){
            $inputTexto.value = "";
        }
    });

    //IMPORTANTISIMO -> el evento "keyup" NO PUEDE BLOQUEAR LAS TECLAS
    //el evento "keydown" SI PUEDE BLOQUEAR LAS TECLAS
    //Capta a travez del input las teclas que presiona el usuario, si bloqueoActivo esta en true
    //bloquea determinadas letras para q no se reflejen en el input.
    $inputTexto.addEventListener("keydown", (e) => {
        if(bloqueoActivo){
            //Crea el array con las letras bloqueadas
            const letrasBloq = ["A", "H", "K", "Y", "C"];
            //Si el array letrasBloq detecta que una tecla presionada por el usuario se encuentra
            //en dicho array, bloquea la tecla.   
            if(letrasBloq.includes(e.key.toUpperCase())){
                e.preventDefault();
            }
        }
    });


}

