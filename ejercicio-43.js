

//43. Crea un reloj digital que muestre la hora actual en la pantalla y 
//se actualice automáticamente cada segundo.

export default function relojDigital(btnMostrar, btnOcultar, relojDigital){

    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $relojDigital = document.querySelector(relojDigital);

    let nuevaFecha = new Date();

    //console.log(nuevaFecha);


    let segundos = nuevaFecha.getSeconds();
    let minutos = nuevaFecha.getMinutes();
    let horas = nuevaFecha.getHours();

    console.log(segundos);
    console.log(minutos);
    console.log(horas);
}









