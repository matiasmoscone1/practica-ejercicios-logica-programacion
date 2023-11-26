
//103. Boton de inicio y final del documento: Crea unos botones al margen superior de la 
//pantalla que permitan ir al final del documento o al inicio.


export default function botonesInicioFin(btnInicio, btnFin){

    //creando variables referenciales al DOM
    const $btnInicio = document.querySelector(btnInicio);
    const $btnFin = document.querySelector(btnFin);

    //captando evento click del boton Inicio
    $btnInicio.addEventListener("click", () => {
        //console.log(window);
        //lleva la pagina al principio del documento - top o 0 son las coordenadas en Y del scroll
        window.scrollTo({top: top, behavior: "smooth"});
    });

    //captando evento click del boton Fin
    $btnFin.addEventListener("click", () => {
        //lleva la pagina al final del documento - document.body.scrollHeight es el total de las
        //coordenadas en Y del scroll, por ende lleva al final
        window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    });

    //console.log(document.body.scrollHeight);


}


