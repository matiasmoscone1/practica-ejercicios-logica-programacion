




//35. Juego de adivinar la tecla: Implementa un juego en el que el programa elija 
//aleatoriamente una tecla del teclado y el jugador deba adivinarla. El juego debe mostrar 
//en la consola si la tecla ingresada es correcta o incorrecta.


export default function adivinaLaTecla(generador, btnMostrar, btnLimpiar, mostrarLetra, resultado){

    //Declarando variables referenciales al DOM
    const $btnGenerador = document.querySelector(generador);
    const $mostrarLetra = document.querySelector(mostrarLetra);
    const $resultadoTecla = document.querySelector(resultado);

    //Inicializando la letra generada con un string vacio
    let letraGenerada = "";

    //Captando evento click del boton Generador
    $btnGenerador.addEventListener("click", () => {
        //Declarando el array con todas las posibles letras para generar
        const arrayLetra = ["A","B","C","D","E",
        "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
        //Variable que me da un numero aleatorio para buscar en el array de letras de 0 a 24
        let generadorLetra = Math.random(0, arrayLetra.length) * arrayLetra.length;
        //Guardar el valor de la letra generada en la variable previamente inicializada
        letraGenerada = arrayLetra[Math.floor(generadorLetra)];
        console.log(letraGenerada);
    });
    
    //Captando evento de letra presionada para ver si coincide con la letra generada
    document.addEventListener("keyup", (e) => {
        e.key.toUpperCase() === letraGenerada 
        ? $resultadoTecla.innerHTML = `El usuario ADIVINO la letra`
        : $resultadoTecla.innerHTML = `El usuario NO ADIVINO la letra`;
    });

    //Captando evento click del documento y viendo si matchea con boton mostrar o limpiar
    document.addEventListener("click", (e) => {
        //Si matchea con boton mostrar, muestra la letra generada en el DOM
        if(e.target.matches(btnMostrar)){
            $mostrarLetra.textContent = `La letra es: ${letraGenerada}`;
        }
        //Si matchea con el boton limpiar, limpia los resultados en el DOM
        if(e.target.matches(btnLimpiar)){
            $resultadoTecla.innerHTML = "";
            $mostrarLetra.textContent = "";
        }
    });

}

    





