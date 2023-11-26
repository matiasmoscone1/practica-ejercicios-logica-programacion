
//103. Boton de inicio y final del documento: Crea unos botones al margen superior de la 
//pantalla que permitan ir al final del documento o al inicio.


export default function botonesInicioFin(btnInicio, btnFin){

    const $btnInicio = document.querySelector(btnInicio);
    const $btnFin = document.querySelector(btnFin);


    $btnInicio.addEventListener("click", () => {
        console.log(window);
        window.scrollTo({top: top, behavior: "smooth"});
    });

    $btnFin.addEventListener("click", () => {
        window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    });

    //console.log(document.body.scrollHeight);


}


