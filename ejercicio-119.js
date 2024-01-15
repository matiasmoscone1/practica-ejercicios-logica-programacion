

//119. Sistema de Gestión de Eventos: Crea un sistema de gestión de eventos personalizado en 
//JavaScript. Debe permitir la suscripción (o registro), desuscripción y emisión de eventos. 
//Además, implementa algún tipo de propagación de eventos.


export default function gestionadorDeEventos(section ,btn1, btn2, btn3, btn4){

    const $section = document.querySelector(section);
    const $btn1 = document.querySelector(btn1);
    const $btn2 = document.querySelector(btn2);
    const $btn3 = document.querySelector(btn3);
    const $btn4 = document.querySelector(btn4);


    $section.addEventListener("click", (e) => {

        if(e.target.matches($btn1)){
            console.log("evento 1");
        }else if(e.target.matches($btn2)){
            console.log("evento 2");
        }else if(e.target.matches($btn3)){
            console.log("evento 3");
        }else if(e.target.matches($btn4)){
            console.log("evento 4");
        }




    });



}





