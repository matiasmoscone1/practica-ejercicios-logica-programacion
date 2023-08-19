

//71. Temporizador de cuenta regresiva: Crea un temporizador de cuenta regresiva que 
//permita al usuario establecer una cantidad de tiempo en minutos y segundos. Al hacer clic 
//en el botón de inicio, el temporizador debe contar hacia abajo hasta llegar a cero.


export default function temporizadorRegresivo(btnInicio, btnLimpiar, inputMin, inputSeg, resultado){

    //creando variables referenciales al DOM
    const $btnInicio = document.querySelector(btnInicio);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton inicio
    $btnInicio.addEventListener("click", () => {
        //tomando el valor de los inputs
        const $inputMin = document.querySelector(inputMin).value;
        const $inputSeg = document.querySelector(inputSeg).value;

        //calculando el tiempo total ingresado en segundos
        let tiempoTotal = parseInt(($inputMin * 60)) + parseInt($inputSeg);

        //console.log($inputMin, $inputSeg);
        //console.log(tiempoTotal);
        /*
        let minutos = tiempoTotal / 60;
        let decimalMinutos = minutos - Math.floor(minutos);
        let segundos = decimalMinutos * 60;
        */

        //creando funcion callback que le pasa por parametro el tiempo total en segundos
        const actualizarCronometro = (tiempo) => {

            //creando variable minutos que se calcula con el tiempo total dividido en 60
            let minutos = tiempo / 60;
            //calcula la parte decimal restante del calculo de la variable minutos
            let parteDecimalMinutos = minutos - Math.floor(minutos);
            //console.log(parteDecimalMinutos);
            //creando variable segundos que redondea el resultado de la variable parteDecimalMinutos por 60
            let segundos = Math.round(parteDecimalMinutos * 60);

            //agrega un 0 adelante para la interfaz, cuando "segundos" es menor a 10
            if(segundos < 10){
                segundos = `0${segundos}`;
            }
            //console.log("Minutos:", Math.floor(minutos));
            //console.log("Segundos:", segundos);

            //muestra resultado en el DOM
            $resultado.textContent = `${Math.floor(minutos)}:${segundos}`;
            
        }

        //funcion callback que le resta 1 al tiempo total
        const intervalo = () => {
            tiempoTotal--;

            actualizarCronometro(tiempoTotal);
            //console.log(tiempoTotal);
            //cierra el intervalo cuando se termina la cuenta regresiva
            if(tiempoTotal === 0){
                clearInterval(tempIntervalo);
                $resultado.textContent = "CRONOMETRO TERMINADO!";
                //console.log("CRONOMETRO TERMINADO");
            }
        }

        //Guarda en una variable temporal el intervalo generado para luego poder cerrarlo
        const tempIntervalo = setInterval(intervalo, 1000);

        //capta el evento click del boton limpiar
        $btnLimpiar.addEventListener("click", () => {
            //cierra el intervalo
            clearInterval(tempIntervalo);
            //deja los inputs vacios
            document.querySelector(inputMin).value = " ";
            document.querySelector(inputSeg).value = " ";
            //limpia el resultado del dom
            $resultado.textContent = " ";
        });

    });


    


}




