

//109. Cronometro en tiempo real: Implementa un reloj en tiempo real que se actualice cada 
//segundo. Utiliza el objeto Date para obtener la hora actual y actualiza la página 
//para reflejar la hora actualizada.


export default function cronometro(resultado, btnIniciar, btnParar, btnLimpiar){


    const $resultado = document.querySelector(resultado);
    const $btnIniciar = document.querySelector(btnIniciar);
    const $btnParar = document.querySelector(btnParar);
    const $btnLimpiar = document.querySelector(btnLimpiar);


    const obtenerReloj = () => {

        setInterval(() => {
            const fecha = new Date;

            console.log(fecha);
        }, 1000); 


    }


    $btnIniciar.addEventListener("click", () => {
        
        $resultado.textContent = "0:00:00";
        //obtenerReloj();

    });


}
