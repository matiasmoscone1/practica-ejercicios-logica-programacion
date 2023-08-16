

//69. Captura y muestra la ubicación del mouse: Crea una página que muestre las 
//coordenadas (X, Y) del mouse en tiempo real mientras se mueve sobre ella.

export default function mostrarCoordenadasMouse(btnMostrar, btnOcultar, resultadoX, resultadoY){

    //Creando las variables referenciales al DOM y moverMouse
    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $resultadoX = document.querySelector(resultadoX);
    const $resultadoY = document.querySelector(resultadoY);
    let moverMouse = null;

    //captando evento click del boton Mostrar
    $btnMostrar.addEventListener("click", () => {

        //guarda en variable moverMouse la callback que actualizara en todo momento los
        //resultados del movimiento del mouse
        moverMouse = (e) => {
            $resultadoX.textContent = `X: ${e.clientX}`;
            $resultadoY.textContent = `Y: ${e.clientY}`;
            //console.log(e.clientX);
            //console.log(e.clientY);
        }

        //capta el evento mousemove y le pasa la variable moverMouse con su respectiva callback
        document.addEventListener("mousemove", moverMouse);

    });

    //capta evento click del boton Ocultar
    $btnOcultar.addEventListener("click", () => {
        //si existe moverMouse, se le remueve el evento
        if(moverMouse){
            document.removeEventListener("mousemove", moverMouse);
        }
        //borra los resultados en el DOM
        $resultadoX.textContent = " ";
        $resultadoY.textContent = " ";
    });

}






