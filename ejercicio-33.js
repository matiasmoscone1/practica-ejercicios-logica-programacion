

//33. Contador de pulsaciones: Crea un programa que cuente y muestre en la 
//consola la cantidad de veces que se ha presionado la tecla "Enter".

export default function contadorPulsaciones(btnMostrar, btnLimpiar, resultado){

    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoPulsaciones = document.querySelector(resultado);

    let contador = 0;

    document.addEventListener("keyup", (e) => {
        if(e.key === "Enter"){
            contador += 1;
        }

        console.log(contador);
    });

    $btnMostrar.addEventListener("click", () => {
        $resultadoPulsaciones.innerHTML = `La cantidad de veces pulsadas enter son: ${contador}`;
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultadoPulsaciones.innerHTML = "";
    });

}












