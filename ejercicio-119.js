

//119. Sistema de Gestión de Eventos: Crea un sistema de gestión de eventos personalizado en 
//JavaScript. Debe permitir la suscripción (o registro), desuscripción y emisión de eventos. 
//Además, implementa algún tipo de propagación de eventos.
//Que cada vez q se suscribe a un evento salten diferentes tipos de eventos


export default function gestionadorDeEventos(section ,btn1, btn2, btn3, btn4, resultado){

    const $section = document.querySelector(section);
    const $resultado = document.querySelector(resultado);

    $section.addEventListener("click", (e) => {

        let muestraDOM = "";
        let gustoSeleccionado = "";

        if(e.target.matches(btn1)){
            
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
                $resultado.innerHTML = muestraDOM;

                const $gustoHelado = document.querySelector(".gusto-helado");
                console.log($gustoHelado);
                $gustoHelado.addEventListener("change", (e) => {
                    gustoSeleccionado = e.target.value;
                    actualizaResultado();
                    /*
                    const nuevoContenido = `<p>El sabor elegido es: ${e.target.value}</p>`
                    $resultado.innerHTML += nuevoContenido;
                    */
                });
                ;

        }else if(e.target.matches(btn2)){
            console.log("evento 2");
        }else if(e.target.matches(btn3)){
            console.log("evento 3");
        }else if(e.target.matches(btn4)){
            console.log("evento 4");
        }

        function actualizaResultado(){
            const resultadoHTML = `<p>El sabor elegido es: ${gustoSeleccionado}</p>`;
            $resultado.innerHTML = muestraDOM + resultadoHTML;
        }
       

    });



}





