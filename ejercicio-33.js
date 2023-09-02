

//33. Contador de pulsaciones: Crea un programa que cuente y muestre en la 
//consola la cantidad de veces que se ha presionado la tecla "Enter".

export default function contadorPulsaciones(btnMostrar, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoPulsaciones = document.querySelector(resultado);

    //inicializando contador de pulsadas de enter
    let contador = 0;

    //captando evento de una tecla
    document.addEventListener("keyup", (e) => {
        //verificando si la tecla presionada es enter, sumamos al contador 1
        if(e.key === "Enter"){
            contador += 1;
        }

        //console.log(contador);
    });

    //captando evento click del boton mostrar para mostrar resultado en DOM
    $btnMostrar.addEventListener("click", () => {
        //mostrando resultado en DOM
        $resultadoPulsaciones.innerHTML = `La cantidad de veces pulsadas enter son: ${contador}`;
    });

    //captando evento click de boton limpiar para limpiar el DOM
    $btnLimpiar.addEventListener("click", () => {
        //limpiando DOM
        $resultadoPulsaciones.innerHTML = "";
    });

}












