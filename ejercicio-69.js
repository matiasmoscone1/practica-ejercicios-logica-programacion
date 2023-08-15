

//69. Captura y muestra la ubicación del mouse: Crea una página que muestre las 
//coordenadas (X, Y) del mouse en tiempo real mientras se mueve sobre ella.

export default function mostrarCoordenadasMouse(btnMostrar, btnOcultar, resultadoX, resultadoY){

    
    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $resultadoX = document.querySelector(resultadoX);
    const $resultadoY = document.querySelector(resultadoY);
    let moverMouse = null;

    $btnMostrar.addEventListener("click", () => {

        moverMouse = (e) => {
            $resultadoX.textContent = `X: ${e.clientX}`;
            $resultadoY.textContent = `Y: ${e.clientY}`;
            //console.log(e.clientX);
            //console.log(e.clientY);
        }

        document.addEventListener("mousemove", moverMouse);

    });

    $btnOcultar.addEventListener("click", () => {
        if(moverMouse){
            document.removeEventListener("mousemove", moverMouse);
        }
        $resultadoX.textContent = " ";
        $resultadoY.textContent = " ";
    });

}






