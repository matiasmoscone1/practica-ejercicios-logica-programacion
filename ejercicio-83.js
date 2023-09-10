


//83. Muestra el valor del scroll a lo largo de la pagina.

export default function muestraScroll(btnMostrar, btnOcultar, resultado){


    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $resultado = document.querySelector(resultado);


    $btnMostrar.addEventListener("click", () => {
        
        document.addEventListener("scroll", (e) => {
            let posicionScroll = window.scrollY;

            console.log(posicionScroll);

        });
    });


}



