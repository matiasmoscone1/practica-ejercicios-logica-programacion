
//111. Window Object:
//a. Abre una nueva ventana emergente con ciertas dimensiones y contenido personalizado.
//b. Detecta cuando la ventana del navegador está siendo redimensionada.


export default function ventanaWindow(btnAbrir, btnCerrar){

    const $btnAbrir = document.querySelector(btnAbrir);
    const $btnCerrar = document.querySelector(btnCerrar);
    
    let ventana;

    $btnAbrir.addEventListener("click", () => {

        ventana = window.open("https://www.facebook.com/", "_blank", "width=600,height=600");

        console.log(ventana.outerWidth, ventana.outerHeight);
        
        window.addEventListener("message", (event) => {
            console.log(event.data.width, event.data.height);
            if (event.data.type === "resize" && event.source === ventana) {
                // Muestra las dimensiones actualizadas recibidas desde la ventana emergente
                console.log(event.data.width, event.data.height);
            }
        })

    });

    $btnCerrar.addEventListener("click", () => {
        if(ventana){       
            ventana.close();
        };
    });

    
    window.addEventListener("resize", () => {
        // Envía las dimensiones actualizadas a la ventana emergente
        if (ventana) {
            ventana.postMessage({
                type: "resize",
                width: window.outerWidth,
                height: window.outerHeight
            }, "*");
        }
    });

    

}






