
//111. Window Object:
//a. Abre una nueva ventana emergente con ciertas dimensiones y contenido personalizado.
//b. Detecta cuando la ventana del navegador está siendo redimensionada.


export default function ventanaWindow(btnAbrir, btnCerrar){

    const $btnAbrir = document.querySelector(btnAbrir);
    const $btnCerrar = document.querySelector(btnCerrar);
    
    let ventana;

    $btnAbrir.addEventListener("click", () => {

        ventana = window.open('https://www.facebook.com/', "_blank", 'width=600,height=600');

        //console.log(ventana.outerWidth, ventana.outerHeight);
    
        window.addEventListener("resize", handleResize());
      
    });
 
    $btnCerrar.addEventListener("click", () => {
        if(ventana){       
            ventana.close();
        };
    });

    function handleResize() {
        // Obtener las dimensiones de la ventana principal
        const dimensions = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        // Enviar las dimensiones a la ventana emergente mediante postMessage
        ventana.postMessage({
            type: 'resize',
            dimensions: dimensions
        }, '*'); // '*' permite enviar mensajes a cualquier origen

        // Imprimir las dimensiones en la consola
        console.log('Dimensiones redimensionadas:', dimensions);
    }
  

}






