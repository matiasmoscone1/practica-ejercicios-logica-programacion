


//56. Hacer como una cuenta regresiva con distintos codigos como x ejemplo de whatsapp 
//cuando pedis el numero para vincualr y te nmandan un codigo por 2 minutos


export default function codigoWhatsapp(btnGenerar, btnLimpiar, timer, resultado){


    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //const reloj = new Date();
    /*
    let tiempo = () => {
        let segundos = 59;
        let minuto = 1;
        $resultado.textContent = "";
        $resultado.textContent = `${minuto}:${segundos}`;
        
        //console.clear();
        //console.log(`${minuto}:${segundos}`);
        segundos--;
        if(segundos < 10){
            segundos = `0${segundos}`;
        }
        if(segundos === "00"){
            minuto = 0;
            segundos = 59;
        }

    };*/


    $btnGenerar.addEventListener("click", () => {
      
        let segundos = 59;
        let minuto = 1;
        const actualizarContador = () => {
            
           
            console.log(`${minuto}:${segundos}`);
            segundos--;
            if(minuto === 0 && segundos === 0){
                minuto = 1;
                segundos = 59;        
            }
            else if(segundos === 0){
                minuto--;
                segundos = 59;
            }
            
            
            $resultado.textContent = "";
            $resultado.textContent = `${minuto}:${segundos}`;
            if(segundos < 10){
                $resultado.textContent = "";
                $resultado.textContent = `${minuto}:0${segundos}`;    
            }
        }
    
        actualizarContador();

        const tiempo = setInterval(actualizarContador, 1000);
   /*
        setInterval(() => {
            $resultado.textContent = "";
            $resultado.textContent = `${minuto}:${segundos}`;
                
            //console.clear();
            //console.log(`${minuto}:${segundos}`);
            segundos--;
            if(segundos < 10){
                segundos = `0${segundos}`;
            }
            if(segundos === "00"){
                minuto = 0;
                segundos = 59;
            }

        }, 1000);
        //setInterval(tiempo, 1000);*/

    });

    $btnLimpiar.addEventListener("click", () => {
        clearInterval(tiempo);
    });

}

