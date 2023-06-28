



//41. Crea un editor de texto básico que permita al usuario escribir y mostrar el 
//contenido en tiempo real a medida que se presionan las teclas.


export default function textoEnVivo(texto, resultado){

    //Inicializando variables del DOM
    const $textoArea = document.querySelector(texto);
    const $resultadoArea = document.querySelector(resultado);

    //Captando evento de tecla presionada en el text-area 
    $textoArea.addEventListener("keydown", (e) => {
        //Concatenando todas las teclas apretadas en el text-area y mostrandolas en el DOM
        
        $resultadoArea.innerHTML += `${e.key}`;
        //console.log(e);
    });
}







