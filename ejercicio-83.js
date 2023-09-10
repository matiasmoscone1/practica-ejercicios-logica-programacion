


//83. Muestra el valor del scroll a lo largo de la pagina.

export default function muestraScroll(btnMostrar, btnOcultar, resultado){


    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $resultado = document.querySelector(resultado);


    let eventoScrollActvo = false;
    let src;

    $btnMostrar.addEventListener("click", () => {
  
        if(!eventoScrollActvo){
           
            src = () => {
                let posicionScroll = window.scrollY;
                //console.log(posicionScroll);
                $resultado.textContent = `La posicion del scroll es: ${Math.floor(posicionScroll)}`;

            }        
            document.addEventListener("scroll", src);
            eventoScrollActvo = true;
        }

    });

    $btnOcultar.addEventListener("click", () => {
        if(eventoScrollActvo){          
            $resultado.textContent = "";
            document.removeEventListener("scroll", src);
            eventoScrollActvo = false;
        }   
    });


}



