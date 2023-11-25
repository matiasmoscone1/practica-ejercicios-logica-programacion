
//102. Obtener información del navegador: Crea una página web con un script de JavaScript 
//que muestre la siguiente información sobre el navegador del usuario: 
//Nombre del navegador. Versión del navegador. Idioma del navegador.


export default function informacionNavegador(btnVer, btnLimpiar, resultado){

    const $btnVer = document.querySelector(btnVer);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnVer.addEventListener("click", () => {

        console.log(navigator);
        
        $resultado.innerHTML = `Nombre: ${navigator.appName} <br><br> Version: ${navigator.appVersion} <br><br> Idioma: ${navigator.language}`;

    });

    
    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
    });
    
}


