
//102. Obtener información del navegador: Crea una página web con un script de JavaScript 
//que muestre la siguiente información sobre el navegador del usuario: 
//Nombre del navegador. Versión del navegador. Idioma del navegador.


export default function informacionNavegador(btnVer, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnVer = document.querySelector(btnVer);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton Ver
    $btnVer.addEventListener("click", () => {
        //console.log(navigator);
        //llamando al objeto navigator y accediendo a sus propiedades, mostrando en el DOM el resultado
        $resultado.innerHTML = `Nombre: ${navigator.appName} <br><br> Version: ${navigator.appVersion} <br><br> Idioma: ${navigator.language}`;
    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el resultado en el DOM
        $resultado.textContent = "";
    });
    
}


