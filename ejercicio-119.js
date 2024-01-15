

//119. Sistema de Gestión de Eventos: Crea un sistema de gestión de eventos personalizado en 
//JavaScript. Debe permitir la suscripción (o registro), desuscripción y emisión de eventos. 
//Además, implementa algún tipo de propagación de eventos.
//Que cada vez q se suscribe a un evento salten diferentes tipos de eventos


export default function gestionadorDeEventos(section ,btn1, btn2, btn3, btn4, resultado){

    const $section = document.querySelector(section);
    const $resultado = document.querySelector(resultado);

    $section.addEventListener("click", (e) => {


        if(e.target.matches(btn1)){
            console.log("evento 1");
        }else if(e.target.matches(btn2)){
            console.log("evento 2");
        }else if(e.target.matches(btn3)){
            console.log("evento 3");
        }else if(e.target.matches(btn4)){
            console.log("evento 4");
        }




    });



}





