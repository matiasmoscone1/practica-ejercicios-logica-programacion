


//36. Bloqueo de teclas: Crea un programa que permita bloquear ciertas teclas del teclado. 
//Al intentar presionar las teclas bloqueadas, no se debe reflejar ninguna acción.


export default function bloqueadorDeTeclas(btnJugar, btnStop, letras, input){

    const $letrasBloqueadas = document.querySelector(letras);

    document.addEventListener("click", (e) => {
        const $inputTexto = document.querySelector(input);

        if(e.target.matches(btnJugar)){
            $letrasBloqueadas.innerHTML = `Las letras bloqueadas son: A, H, K, Y, C`;
             document.addEventListener("keyup", (e) => {
                switch(e.key){
                    case e.key === "A": "";
                    break;
                    case e.key === "H": "";
                    break;
                    case e.key === "K": "";
                    break;
                    case e.key === "Y": "";
                    break;
                    case e.key === "C": "";
                    break;
                }
             });
        }
        if(e.target.matches(btnStop)){

        }


    });

}

