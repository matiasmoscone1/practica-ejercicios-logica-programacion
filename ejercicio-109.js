

//109. Cronometro en tiempo real: Implementa un reloj en tiempo real que se actualice cada 
//segundo. Utiliza el objeto Date para obtener la hora actual y actualiza la página 
//para reflejar la hora actualizada.


export default function cronometro(resultado, btnIniciar, btnParar, btnLimpiar){


    const $resultado = document.querySelector(resultado);
    const $btnIniciar = document.querySelector(btnIniciar);
    const $btnParar = document.querySelector(btnParar);
    const $btnLimpiar = document.querySelector(btnLimpiar);


    let intervalo;
    
    const corrigeCrono = (num) => {

        if(num < 10){
            return(`0${num}`);
        }else{
            return num;
        }

    }

    const obtenerReloj = () => {

        let minutos = 0;
        let segundos = 0;
        let milisegundos = 0;
            
        
        intervalo = setInterval(() => {        
            
            milisegundos++;

            if(milisegundos === 100){
                segundos++;
                milisegundos = 0;
                if(segundos === 60){
                    segundos = 0;
                    minutos++;
                };
            }            
        
            $resultado.textContent = `${corrigeCrono(minutos)}:${corrigeCrono(segundos)}:${milisegundos}`;
            
            //console.log(`${minutos}:${segundos}:${milisegundos}`);
            

        }, 10); 


    }


    $btnIniciar.addEventListener("click", () => {
        
        $resultado.textContent = "0:00:00";
        if(!intervalo){
            obtenerReloj();
        }else{
            return;
        }
    });

    $btnParar.addEventListener("click", () => {
        clearInterval(intervalo);
    })

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
    });

}
