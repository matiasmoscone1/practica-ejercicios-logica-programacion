

//109. Cronometro en tiempo real: Implementa un reloj en tiempo real que se actualice cada 
//segundo. Utiliza el objeto Date para obtener la hora actual y actualiza la página 
//para reflejar la hora actualizada.


export default function cronometro(resultado, btnIniciar, btnContinuar, btnParar, btnLimpiar){

    //creando variables referenciales al DOM
    const $resultado = document.querySelector(resultado);
    const $btnIniciar = document.querySelector(btnIniciar);
    const $btnContinuar = document.querySelector(btnContinuar);
    const $btnParar = document.querySelector(btnParar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    //creando variable intervalo que almacenara el setInterval del cronometro
    let intervalo;

    //variables basicas del cronometro
    let minutos = 0;
    let segundos = 0;
    let milisegundos = 0;

    //funcion que corrige la representacion de los minutos y segundos en el DOM
    const corrigeCrono = (num) => {
        //si es menor a 10, se la agrega un 0 adelante
        if(num < 10){
            return(`0${num}`);
        }else{
            //sino, devuelve el numero tal cual
            return num;
        }
    }

    
    //funcion general que contiene el setInterval
    const obtenerReloj = () => {

        //almacenando el setInterval en la variable intervalo creada anteriormente
        intervalo = setInterval(() => {        

            //aumenta milisegundo en 1
            milisegundos++;

            //si milisegundos es igual a 100, agrega un segundo y vuelve milisegundos a 0
            if(milisegundos === 100){
                segundos++;
                milisegundos = 0;
                //misma secuencia con los segundos, si llegan a 60, se agrega un minuto y vuelve
                //los segundos a 0
                if(segundos === 60){
                    segundos = 0;
                    minutos++;
                };
            }            
        
            //muestra el resultado en el DOM
            $resultado.textContent = `${corrigeCrono(minutos)}:${corrigeCrono(segundos)}:${milisegundos}`;
            
            //console.log(`${minutos}:${segundos}:${milisegundos}`);
        //se ejecuta el intervalo cada 10 milisegundos
        }, 10);

    }


    //captando evento click del boton Iniciar
    $btnIniciar.addEventListener("click", () => {    

        //si no existe intervalo llama a la funcion general del setInterval
        if(!intervalo){
            obtenerReloj();
        }else{
            //sino, devuelve nada
            return;
        }
    });

    //capta evento click del boton Continuar
    $btnContinuar.addEventListener("click", () => {
        //si existe el intervalo, sigue donde se freno el intervalo, es decir, con los mismos
        //valores de las variables, minutos, segundos, milisegundos
        if(intervalo){
            obtenerReloj();
        //sino, devuelve nada
        }else{
            return;
        }
    });

    //captando evento click del boton Parar
    $btnParar.addEventListener("click", () => {
        //detiene el intervalo
        clearInterval(intervalo);
    })

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM
        $resultado.textContent = "";
    });

}
