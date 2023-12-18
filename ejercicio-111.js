
//111. Window Object:
//a. Abre una nueva ventana emergente con ciertas dimensiones y contenido personalizado.
//b. Detecta cuando la ventana del navegador está siendo redimensionada.


export default function ventanaWindow(btnAbrir, btnCerrar){

    //creando variables referenciales al DOM
    const $btnAbrir = document.querySelector(btnAbrir);
    const $btnCerrar = document.querySelector(btnCerrar);

    //creando variable que contendra la ventana emergente
    let ventana;

    //captando evento click del boton Abrir
    $btnAbrir.addEventListener("click", () => {

        //abre la nueva ventana emergente
        ventana = window.open('https://www.facebook.com/', "_blank", 'width=600,height=600');

        //console.log(ventana.outerWidth, ventana.outerHeight);
    
        
        window.addEventListener("resize", handleResize);
      
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
        if(ventana && ventana.opener){            
            ventana.opener.postMessage({
                type: 'resize',
                dimensions: dimensions
            }, '*'); // '*' permite enviar mensajes a cualquier origen
        }

        // Imprimir las dimensiones en la consola
        console.log('Dimensiones redimensionadas:', dimensions);
    }
  

}






