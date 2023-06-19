




//35. Juego de adivinar la tecla: Implementa un juego en el que el programa elija 
//aleatoriamente una tecla del teclado y el jugador deba adivinarla. El juego debe mostrar 
//en la consola si la tecla ingresada es correcta o incorrecta.


export default function adivinaLaTecla(generador, btnMostrar, btnLimpiar, mostrarLetra, resultado){

    const $btnGenerador = document.querySelector(generador);
    const $mostrarLetra = document.querySelector(mostrarLetra);
    const $resultadoTecla = document.querySelector(resultado);


    let letraGenerada = "";

    $btnGenerador.addEventListener("click", () => {
        const arrayLetra = ["A","B","C","D","E",
        "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
        let generadorLetra = Math.random(0, arrayLetra.length) * arrayLetra.length;
        letraGenerada = arrayLetra[Math.floor(generadorLetra)];
        console.log(letraGenerada);
    });
    
    document.addEventListener("keyup", (e) => {
        e.key === letraGenerada 
        ? $resultadoTecla.innerHTML = `El usuario ADIVINO la letra`
        : $resultadoTecla.innerHTML = `El usuario NO ADIVINO la letra`;
    });

    document.addEventListener("click", (e) => {
        if(e.target.matches(btnMostrar)){
            $mostrarLetra.textContent = `La letra es: ${letraGenerada}`;
        }
        if(e.target.matches(btnLimpiar)){
            $resultadoTecla.innerHTML = "";
            $mostrarLetra.textContent = "";
        }

    });

}

    





