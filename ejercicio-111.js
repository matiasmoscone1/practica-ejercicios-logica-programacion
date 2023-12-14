
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
        
        window.addEventListener("resize", () => {
            ventana.postMessage({
                type: "resize",
                width: window.width,
                height: window.height
            }, "*");
        })


    });

    $btnCerrar.addEventListener("click", () => {
        if(ventana){       
            ventana.close();
        };
    });
    

    window.addEventListener("message", (e) => {
        if(e.data.type === "resize"){
            console.log(e.data.width, e.data.height);
        }
    });
    

}






