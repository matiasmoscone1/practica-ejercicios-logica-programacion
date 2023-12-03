

//107. Cambiar el fondo de la página según la hora del día: Crea una página web que cambie 
//dinámicamente el fondo de la página dependiendo de la hora del día. Utiliza el objeto 
//Date para obtener la hora actual y actualiza el fondo de acuerdo con la siguiente lógica: 
//Mañana (6:00 AM - 12:00 PM): Fondo claro. Tarde (12:00 PM - 6:00 PM): Fondo medio. 
//Noche (6:00 PM - 6:00 AM): Fondo oscuro.


export default function cambiaFondoPorHora(btnIniciar, btnFinalizar){


    const $btnIniciar = document.querySelector(btnIniciar);
    const $btnFinalizar = document.querySelector(btnFinalizar);

    const hora = new Date;
    
    console.log(hora.getHours());



    $btnIniciar.addEventListener("click", () => {

        if(hora > 6 && hora < 12){
            document.body.style.backgroundColor = "#FFFFFF";
            document.body.style.color = "#000000";
        }else if(hora > 12 && hora < 18){
            document.body.style.backgroundColor = "#808080";
            document.body.style.color = "#FFFFFF";    
        }else if(hora > 18 && hora < 6){
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#FFFFFF";
        }


    });


}


