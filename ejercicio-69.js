

//69. Captura y muestra la ubicación del mouse: Crea una página que muestre las 
//coordenadas (X, Y) del mouse en tiempo real mientras se mueve sobre ella.

export default function mostrarCoordenadasMouse(btnMostrar, btnOcultar, resultadoX, resultadoY){

    
    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $resultadoX = document.querySelector(resultadoX);
    const $resultadoY = document.querySelector(resultadoY);
    
    $btnMostrar.addEventListener("click", () => {

        document.addEventListener("mousemove", (e) => {

            console.log(e.clientX);
            console.log(e.clientY);
        });
        


    });



}






