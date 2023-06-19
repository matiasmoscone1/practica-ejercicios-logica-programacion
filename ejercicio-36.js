


//36. Bloqueo de teclas: Crea un programa que permita bloquear ciertas teclas del teclado. 
//Al intentar presionar las teclas bloqueadas, no se debe reflejar ninguna acción.


export default function bloqueadorDeTeclas(btnJugar, btnStop, input){


    document.addEventListener("click", (e) => {
        const $inputTexto = document.querySelector(input);

        if(e.target.matches(btnJugar)){

        }
        if(e.target.matches(btnStop)){

        }


    });

}

