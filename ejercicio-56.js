


//56. Hacer como una cuenta regresiva con distintos codigos como x ejemplo de whatsapp 
//cuando pedis el numero para vincualr y te nmandan un codigo por 2 minutos


export default function codigoWhatsapp(btnGenerar, btnLimpiar, timer, resultado){


    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const reloj = new Date();

    $btnGenerar.addEventListener("click", () => {
        /*let tiempo = setInterval(() => {
            let segundos = 59;
            let minuto = 1;
            setInterval(() => {
                console.log(`${minuto}:${segundos}`);
                segundos--;
                if(segundos === 0){
                    minuto = 0;
                    segundos = 59;
                }
            }, 1000);
        }, 200000);*/
        let segundos = 59;
            let minuto = 1;
            setInterval(() => {
                console.clear();
                console.log(`${minuto}:${segundos}`);
                segundos--;
                if(segundos < 10){
                    segundos = `0${segundos}`;
                }
                if(segundos === 0){
                    minuto = 0;
                    segundos = 59;
                }
                
            }, 1000);

        
    });


}

