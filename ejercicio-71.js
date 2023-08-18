

//71. Temporizador de cuenta regresiva: Crea un temporizador de cuenta regresiva que 
//permita al usuario establecer una cantidad de tiempo en minutos y segundos. Al hacer clic 
//en el botón de inicio, el temporizador debe contar hacia abajo hasta llegar a cero.


export default function temporizadorRegresivo(btnInicio, btnLimpiar, inputMin, inputSeg, resultado){

    const $btnInicio = document.querySelector(btnInicio);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    

    $btnInicio.addEventListener("click", () => {
        const $inputMin = document.querySelector(inputMin).value;
        const $inputSeg = document.querySelector(inputSeg).value;

        let tiempoTotal = parseInt(($inputMin * 60)) + parseInt($inputSeg);

        //console.log($inputMin, $inputSeg);
        console.log(tiempoTotal);

        const intervalo = () => {
            tiempoTotal--;
            console.log(tiempoTotal);
        }

        setInterval(intervalo, 1000);



    });

}




