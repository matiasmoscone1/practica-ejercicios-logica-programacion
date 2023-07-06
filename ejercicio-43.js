

//43. Crea un reloj digital que muestre la hora actual en la pantalla y 
//se actualice automáticamente cada segundo.

export default function relojDigital(btnMostrar, btnOcultar, relojDigital){

    //Creando variables referenciales al DOM
    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnOcultar = document.querySelector(btnOcultar);
    const $relojDigital = document.querySelector(relojDigital);

    //Creando id del intervalo para poder borrarlo cuando se aprete el boton ocultar
    let idIntervalo;
   
    //console.log(nuevaFecha);


    //funcion que actualiza el reloj cada 1 segundo
    const actualizarReloj = () => {
        
        //toma la variable del id intervalo y le agrega un setInterval que genera una nueva fecha,
        //nuevos segundos, minutos y horas cada 1 segundo.
        idIntervalo = setInterval(() => {
            let nuevaFecha = new Date();

            let segundos = nuevaFecha.getSeconds();
            let minutos = nuevaFecha.getMinutes();
            let horas = nuevaFecha.getHours();
            //Si la variable segundos es menor a 10, se le agrega un 0 adelante para que quede
            //mas legible el reloj digital.
            if(segundos < 10){
                segundos = `0${segundos}`;
            }
            //Muestra en el dom el reloj digital.
            $relojDigital.innerHTML = `${horas} : ${minutos} : ${segundos}`;

        }, 1000);
    }
    //console.log(segundos);
    //console.log(minutos);
    //console.log(horas);


    //capta evento click del boton mostrar y llama a la funcion que actualiza cada 1 segundo el reloj
    $btnMostrar.addEventListener("click", () => {
        actualizarReloj();
    });

    //capta el evento click del boton ocultar y borra el contenido en el DOM, posterior a eso
    //ejecuta un clearInterval con la variable del idIntervalo para borrar el intervalo.
    $btnOcultar.addEventListener("click", () => {
        $relojDigital.innerHTML = "";
        clearInterval(idIntervalo);
    })

}











