

//43. Crea un reloj digital que muestre la hora actual en la pantalla y 
//se actualice automáticamente cada segundo.

export default function relojDigital(btnMostrar, btnOcultar, relojDigital){

    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $relojDigital = document.querySelector(relojDigital);

   
    //console.log(nuevaFecha);


    const actualizarReloj = () => {
        
        setInterval(() => {
            let nuevaFecha = new Date();

            let segundos = nuevaFecha.getSeconds();
            let minutos = nuevaFecha.getMinutes();
            let horas = nuevaFecha.getHours();
            $relojDigital.innerHTML = `${horas} : ${minutos} : ${segundos}`;

        }, 1000);
    }
    //console.log(segundos);
    //console.log(minutos);
    //console.log(horas);



    $btnMostrar.addEventListener("click", () => {
        actualizarReloj();
    });


    $btnOcultar.addEventListener("click", () => {
        $relojDigital.innerHTML = "";
    })

}











