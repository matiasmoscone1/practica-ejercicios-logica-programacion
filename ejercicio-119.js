

//119. Sistema de Gestión de Eventos: Crea un sistema de gestión de eventos personalizado en 
//JavaScript. Debe permitir la suscripción (o registro), desuscripción y emisión de eventos. 
//Además, implementa algún tipo de propagación de eventos.
//Que cada vez q se suscribe a un evento salten diferentes tipos de eventos


export default function gestionadorDeEventos(section ,btn1, btn2, btn3, btn4, resultado){

    //creando variables referenciales al DOM
    const $section = document.querySelector(section);
    const $resultado = document.querySelector(resultado);

    //captando evento click de la seccion
    $section.addEventListener("click", (e) => {

        //creando variables que serviran para determinar el transcurso del algoritmo
        let muestraDOM = "";
        let gustoSeleccionado = "";

        //capta si el click fue a un boton especifico de la seccion
        if(e.target.matches(btn1)){
            
            //muestra en el DOM el evento desencadenado por el boton
            muestraDOM += `<div>
                <h4>Selecciona tu gusto de helado favorito</h4>
                    <select class="gusto-helado">   
                        <option value="">Elige un sabor...</option>     
                        <option value="chocolate">Chocolate</option>
                        <option value="vainilla">Vainilla</option>
                        <option value="frutilla">Frutilla</option>
                    </select>
                </div>
                `;
                //muestra en el DOM el resultado
                $resultado.innerHTML = muestraDOM;

                //selecciona el puntero de una etiqueta nueva creada en el DOM
                const $gustoHelado = document.querySelector(".gusto-helado");
                //console.log($gustoHelado);
                //capta el evento change del helado
                $gustoHelado.addEventListener("change", (e) => {
                    //guarda en la variable gustoSeleccionado el valor elegido x el usuario
                    gustoSeleccionado = e.target.value;
                    //llama a la funcion que actualiza el sabor de helado
                    actualizaResultado(e.target.value);
                });
                ;
        //captando el evento click del boton de suscribirse al 2do evento
        }else if(e.target.matches(btn2)){
            //creando variable que almacenara la tecla presionada
            let letraPresionada = "";
            //muestra en el DOM la estructura del evento, la tecla que fue presionada
            muestraDOM += `<div>
            <h4>Presiona alguna tecla</h4>
            <p>La tecla presionada es: ${letraPresionada}</p>
            </div>`;
            //muestra en el DOM el resultado
            $resultado.innerHTML = muestraDOM;
            //capta el evento keyup, cuando se presiona una tecla y se suelta
            document.addEventListener("keyup", (e) => {
                //guarda en la variable previamente creada el valor de la tecla presionada
                letraPresionada = e.key;
                //console.log(letraPresionada);
                //se restablece el DOM 
                muestraDOM = "";
                $resultado.innerHTML = muestraDOM;
                muestraDOM += `<div>
                <h4>Presiona alguna tecla</h4>
                <p>La tecla presionada es: "${letraPresionada.toUpperCase()}"</p>
                </div>`
                //se concatena y se muestra el resultado en el DOM
                $resultado.innerHTML += muestraDOM;
            });
        //capta evento 3
        }else if(e.target.matches(btn3)){
            //muestra estructura del evento 3
            muestraDOM += `<div>
                <h4>Evento contextmenu</h4>
                <button class="btn-contextmenu">Click derecho</button>
            </div>`;
            $resultado.innerHTML = muestraDOM;
            
            //crea variable referencial al DOM, segun lo creado en la estructura HTML anterior
            const $contextMenuButton = document.querySelector(".btn-contextmenu");
            //capta evento contextmenu (hacer click derecho)
            $contextMenuButton.addEventListener("contextmenu", (e) => {
                //se previene por defecto el evento
                e.preventDefault();
                //muestar el resultado en el DOM
                $resultado.innerHTML = muestraDOM + `<p>Evento de tipo: "${e.type}"</p>`;
                //console.log(e);
            });
        //capta evento click del boton 4 
        }else if(e.target.matches(btn4)){
            //se muestra la estructura del evento 4 en el DOM
            muestraDOM += `<div>
                <h4>Evento mouseenter</h4>
                <div class="evento-mouseenter">Pasa el mouse por aqui</div>
            </div>`;
            $resultado.innerHTML = muestraDOM;

            //se crea variable referencial al DOM segun la estructura HTML creada anteriormente
            const $areaMouseEnter = document.querySelector(".evento-mouseenter");

            //se crea una variable donde se almacena el evento cuando ingresa el mouse en el div
            const eventoManejador = $areaMouseEnter.addEventListener("mouseenter", (e) => {
                //se muestra en el DOM el contenido
                $resultado.innerHTML = muestraDOM + `<p>Evento de tipo: "${e.type}"</p>
                <h5>Coordenadas</h5><p>X: ${e.x}</p><p>Y: ${e.y}</p>
                `;
            });

            //capta el evento cuando el mouse sale del div
            $areaMouseEnter.addEventListener("mouseleave", () => {
                //se remueve el evento anterior y limpia el resultado del DOM
                $areaMouseEnter.removeEventListener(eventoManejador);
                console.log("se borro");
                $resultado.innerHTML = "";
            });
        }

        //funcion que se le pasa el valor elegido por el usuario en el evento 1
        function actualizaResultado(sabor){
            //muestra en el DOM el resultado elegido
            const resultadoHTML = `<p>El sabor elegido es: ${sabor}</p>`;
            $resultado.innerHTML = muestraDOM + resultadoHTML;
        }
       

    });



}





