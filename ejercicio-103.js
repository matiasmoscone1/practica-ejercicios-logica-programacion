
//103. Boton de inicio y final del documento: Crea unos botones al margen superior de la 
//pantalla que permitan ir al final del documento o al inicio.


export default function botonesInicioFin(btnInicio, btnFin){

    const $btnInicio = document.querySelector(btnInicio);
    const $btnFin = document.querySelector(btnFin);


    $btnInicio.addEventListener("click", () => {

        console.log(window);

    });


}


