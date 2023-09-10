


//83. Muestra el valor del scroll a lo largo de la pagina.

export default function muestraScroll(btnMostrar, btnOcultar, resultado){

    //creando variables referenciales al DOM
    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $resultado = document.querySelector(resultado);

    //creando variables, una tipo bandera que se activa si se clickea el boton Mostrar y se 
    //desactiva cuando se clickea el boton Ocultar, y otra que sera una callback que indicara
    //la posicion del scroll
    let eventoScrollActvo = false;
    let src;

    //captando evento click del boton Mostrar
    $btnMostrar.addEventListener("click", () => {
        //si no esta eventoScrollActivo, ejecuta la callback
        if(!eventoScrollActvo){
           
            src = () => {
                //muestra la posicion del scroll
                let posicionScroll = window.scrollY;
                //console.log(posicionScroll);
                //muestra resultado en el DOM
                $resultado.textContent = `La posicion del scroll es: ${Math.floor(posicionScroll)}`;

            }        
            //escucha evento scroll y ejecuta la callback src, cada que cambie el scroll
            document.addEventListener("scroll", src);
            //deja eventoScrollActivo en true para que siga escuchando el evento
            eventoScrollActvo = true;
        }

    });

    //captando evento click del boton Ocultar
    $btnOcultar.addEventListener("click", () => {
        //si eventoScrollActivo es true y se clickeo el boton Ocultar
        if(eventoScrollActvo){          
            //borra el DOM, remueve el evento "scroll" y deja eventoScrollActivo en false
            $resultado.textContent = "";
            document.removeEventListener("scroll", src);
            eventoScrollActvo = false;
        }   
    });


}



