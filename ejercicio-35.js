




//35. Juego de adivinar la tecla: Implementa un juego en el que el programa elija 
//aleatoriamente una tecla del teclado y el jugador deba adivinarla. El juego debe mostrar 
//en la consola si la tecla ingresada es correcta o incorrecta.


export default function adivinaLaTecla(generador, btnMostrar, btnLimpiar, resultado){

    const $btnGenerador = document.querySelector(generador);
    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoTecla = document.querySelector(resultado);

    let letraGenerada = "";

    $btnGenerador.addEventListener("click", () => {
        const arrayLetra = ["A","B","C","D","E",
        "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
        let generadorLetra = Math.random(0, arrayLetra.length) * arrayLetra.length;
        letraGenerada = arrayLetra[Math.floor(generadorLetra)];
        console.log(letraGenerada);
    });
    


}

    





