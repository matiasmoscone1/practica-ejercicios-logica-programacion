


//56. Hacer como una cuenta regresiva con distintos codigos como x ejemplo de whatsapp 
//cuando pedis el numero para vincualr y te nmandan un codigo por 2 minutos


export default function codigoWhatsapp(btnGenerar, btnLimpiar, timer, codigo){


    //Creando variables referenciales al DOM
    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(timer);
    const $codigo = document.querySelector(codigo);

    //Creando variable tiempo e inicianizandola con un string vacio. Luego esta variable 
    //almacenara los set interval
    let tiempo = "";
    
    //Captando evento click del boton Genrar
    $btnGenerar.addEventListener("click", () => {
      
        //Creando variables segundos y minutos, tmb el generarCodigo que es un string vacio
        //y luego va concatenando numeros en formato string.
        let segundos = 60;
        let minuto = 1;
        let generarCodigo = "";
        
        
        //Ciclo for que genera el primer codigo, itera 6 veces y almacena (concatena)
        //un numero distinto por cada iteracion
        for(let i = 0; i <= 6; i++){
            generarCodigo += Math.floor(Math.random() * 9);
        }


        //funcion que sera ejecutada en el set interval cada 1 segundo
        const actualizarContador = () => {
            
            //console.log(generarCodigo);

            //console.log(`${minuto}:${segundos}`);
            //resta 1 a la variable segundos, cada 1 segundo (por el setInterval)
            segundos--;
            //Si minuto = 0 y segundo = 0; quiere decir que hay que generar un codigo nuevo y
            //restablecer el timer.
            if(minuto === 0 && segundos === 0){
                //Borra el codigo en el DOM y inicializa de nuevo las 3 variables generadas 
                //anteriormente
                $codigo.textContent = ``;
                generarCodigo = "";
                minuto = 1;
                segundos = 59;
                //generarNuevoCodigo();
                //Genera nuevo codigo de 6 digitos
                for(let i = 0; i <= 6; i++){
                    generarCodigo += Math.floor(Math.random() * 9);
                }
            }
            //Si solamente los segundos llegan a 0 y todavia el minuto esta en 1,
            //le resta 1 a la variable minuto y segundos se reestablecen a 59.
            else if(segundos === 0){
                minuto--;
                segundos = 59;
            }
            
            //Muestra el codigo en el DOM
            $codigo.textContent = `El codigo es: ${generarCodigo}`;
            //Se borra y se imprime en el DOM el minuto y segundo, (se borra para que vaya
            //actualizandose)
            $resultado.textContent = "";
            $resultado.textContent = `${minuto}:${segundos}`;
            //Si Segundos es menor a 10, se le agrega un 0 adelante para que quede bien esteticamente
            if(segundos < 10){
                $resultado.textContent = "";
                $resultado.textContent = `${minuto}:0${segundos}`;    
            }
        }
    
        //generarNuevoCodigo();
        //Llama a la funcion actualizarContador por primera vez, para que comienze a ejecutarse.
        actualizarContador();

        //almacena en la variable tiempo el setInterval de la funcion actualizar contador (sirve
        //para despues borrar el intervalo en el boton limpiar)
        tiempo = setInterval(actualizarContador, 1000);
    
    });

    //Capta el evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Borra en el DOM el codigo y el tiempo
        $codigo.textContent = "";
        $resultado.textContent = "";
        //Frena el intervalo generado en el boton Generar
        clearInterval(tiempo);
    });

}

