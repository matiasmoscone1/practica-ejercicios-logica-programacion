
//102. Obtener información del navegador: Crea una página web con un script de JavaScript 
//que muestre la siguiente información sobre el navegador del usuario: 
//Nombre del navegador. Versión del navegador. Idioma del navegador.


export default function informacionNavegador(btnVer, btnLimpiar){

    const $btnVer = document.querySelector(btnVer);
    const $btnLimpiar = document.querySelector(btnLimpiar);


    $btnVer.addEventListener("click", () => {

        console.log(Navigator);


    });


}


