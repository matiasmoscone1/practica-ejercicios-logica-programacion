
//110. Geolocation API: Implementa una función que calcule la distancia entre 
//la ubicacion del usuario y otros puntos de referencia (3 puntos de referencia de Córdoba)

export default function distanciaGeolocalizacion(ubicacion, btnCalcular, btnLimpiar, resultado){

    const $ubicacion = document.querySelector(ubicacion);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    const dinoMall = {
        latitud: -31.428716737115753, 
        longitud: -64.21243706160108
    };

    $btnCalcular.addEventListener("click", () => {

        //console.log(navigator.geolocation.getCurrentPosition());

        if(navigator.geolocation){            
            navigator.geolocation.getCurrentPosition((position) => {
                const latitud = position.coords.latitude;
                const longitud = position.coords.longitude;
                console.log(latitud, longitud);
                $ubicacion.innerHTML = `Latitud: ${latitud} <br> Longitud: ${longitud}`;
            });
        }

        
    })

    $btnLimpiar.addEventListener("click", () => {
        $ubicacion.textContent = "";
        $resultado.textContent = "";
    });

    



}



