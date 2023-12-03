

//107. Cambiar el fondo de la página según la hora del día: Crea una página web que cambie 
//dinámicamente el fondo de la página dependiendo de la hora del día. Utiliza el objeto 
//Date para obtener la hora actual y actualiza el fondo de acuerdo con la siguiente lógica: 
//Mañana (6:00 AM - 12:00 PM): Fondo claro. Tarde (12:00 PM - 6:00 PM): Fondo medio. 
//Noche (6:00 PM - 6:00 AM): Fondo oscuro.


export default function cambiaFondoPorHora(btnIniciar, btnFinalizar){

    //creando variables referenciales al DOM
    const $btnIniciar = document.querySelector(btnIniciar);
    const $btnFinalizar = document.querySelector(btnFinalizar);

    //creando variable hora que contendra el objeto Date con la fecha actual
    const hora = new Date;

    //captando evento click del boton Iniciar
    $btnIniciar.addEventListener("click", () => {

        console.log(hora.getHours());

        //Logica de intervalo de horas, si esta entre las 6 y las 12, es fondo blanco
        //si esta entre las 12 y las 18, es fondo gris
        //si esta entre las 18 y las 6 es fondo negro
        if(hora.getHours() > 6 && hora.getHours() < 12){
            document.body.style.backgroundColor = "#FFFFFF";
            document.body.style.color = "#000000";
        }else if(hora.getHours() > 12 && hora.getHours() < 18){
            document.body.style.backgroundColor = "#808080";
            document.body.style.color = "#FFFFFF";    
        }else if((hora > 18 && hora < 23) || hora < 6){
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#FFFFFF";
        }

    });

    $btnFinalizar.addEventListener("click", () => {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
    });

}


