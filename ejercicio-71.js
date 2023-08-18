

//71. Temporizador de cuenta regresiva: Crea un temporizador de cuenta regresiva que 
//permita al usuario establecer una cantidad de tiempo en minutos y segundos. Al hacer clic 
//en el botón de inicio, el temporizador debe contar hacia abajo hasta llegar a cero.


export default function temporizadorRegresivo(btnInicio, btnLimpiar, inputMin, inputSeg, resultado){

    const $btnInicio = document.querySelector(btnInicio);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnInicio.addEventListener("click", () => {
        const $inputMin = document.querySelector(inputMin).value;
        const $inputSeg = document.querySelector(inputSeg).value;

        let tiempoTotal = parseInt(($inputMin * 60)) + parseInt($inputSeg);

        //console.log($inputMin, $inputSeg);
        console.log(tiempoTotal);
        /*
        let minutos = tiempoTotal / 60;
        let decimalMinutos = minutos - Math.floor(minutos);
        let segundos = decimalMinutos * 60;
        */

        const actualizarCronometro = (tiempo) => {
            
            let minutos = tiempo / 60;
            let parteDecimalMinutos = minutos - Math.floor(minutos);
            console.log(parteDecimalMinutos);
            let segundos = Math.round(parteDecimalMinutos * 60);

            if(segundos < 10){
                segundos = `0${segundos}`;
            }
            console.log("Minutos:", Math.floor(minutos));
            console.log("Segundos:", segundos);

            $resultado.textContent = `${Math.floor(minutos)}:${segundos}`;
            
        }

        const intervalo = () => {
            tiempoTotal--;

            actualizarCronometro(tiempoTotal);
            console.log(tiempoTotal);
            if(tiempoTotal === 0){
                clearInterval(tempIntervalo);
                console.log("CRONOMETRO TERMINADO");
            }
        }


        const tempIntervalo = setInterval(intervalo, 1000);

    });


    $btnLimpiar.addEventListener("click", () => {

    });


}




