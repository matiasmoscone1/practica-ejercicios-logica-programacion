



//41. Crea un editor de texto básico que permita al usuario escribir y mostrar el 
//contenido en tiempo real a medida que se presionan las teclas.


export default function textoEnVivo(texto, resultado){

    const $textoArea = document.querySelector(texto);
    const $resultadoArea = document.querySelector(resultado);

    document.addEventListener("keydown", (e) => {
        $resultadoArea.innerHTML = `${e.key}`;
        console.log(e);
    });



}







