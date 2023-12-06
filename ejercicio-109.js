

//109. Cronometro en tiempo real: Implementa un reloj en tiempo real que se actualice cada 
//segundo. Utiliza el objeto Date para obtener la hora actual y actualiza la página 
//para reflejar la hora actualizada.


export default function cronometro(resultado, btnIniciar, btnContinuar, btnParar, btnLimpiar){


    const $resultado = document.querySelector(resultado);
    const $btnIniciar = document.querySelector(btnIniciar);
    const $btnContinuar = document.querySelector(btnContinuar);
    const $btnParar = document.querySelector(btnParar);
    const $btnLimpiar = document.querySelector(btnLimpiar);


    let intervalo;
    
    let minutos = 0;
    let segundos = 0;
    let milisegundos = 0;
        
    const corrigeCrono = (num) => {

        if(num < 10){
            return(`0${num}`);
        }else{
            return num;
        }

    }

    
    const obtenerReloj = () => {

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
        
        
        if(!intervalo){
            $resultado.textContent = "0:00:00";
            obtenerReloj();
        }else{
            return;
        }
    });

    $btnContinuar.addEventListener("click", () => {
        if(intervalo){
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
