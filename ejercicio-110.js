
//110. Geolocation API: Implementa una función que calcule la distancia entre 
//la ubicacion del usuario y otros puntos de referencia (3 puntos de referencia de Córdoba)

export default function distanciaGeolocalizacion(btnCalcular, btnLimpiar, ubicacion, resultado){

    const $ubicacion = document.querySelector(ubicacion);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    const dinoMall = {
        latitud: -31.428716737115753, 
        longitud: -64.21243706160108
    };
    const kempesEstadio = {
        latitud: -31.369144434400507, 
        longitud: -64.24594464171038
    };
    const shoppingJockey = {
        latitud: -31.45128947638176, 
        longitud: -64.18208437543036
    }

    const radioTierra = 6371000;


    const toRadians = (grados) => {
        return grados * (Math.PI / 180);
    }    

    $btnCalcular.addEventListener("click", () => {

        //console.log(navigator.geolocation.getCurrentPosition());

        if(navigator.geolocation){            
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                //console.log(latitud, longitud);
                $ubicacion.innerHTML = `Latitud: ${lat} <br> Longitud: ${lon}`;
            
                lat = toRadians(lat);
                lon = toRadians(lon);
                dinoMall.latitud = toRadians(lat);
                dinoMall.longitud = toRadians(lon);
            
                const difLatitud = dinoMall.latitud - lat;
                const difLongitud = dinoMall.longitud - lon;

                let a = Math.sin(difLatitud / 2) * Math.sin(difLatitud / 2) +
                Math.cos(dinoMall.latitud) * Math.cos(lat) *
                Math.sin(difLongitud / 2) * Math.sin(difLongitud / 2);
    
                let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                let distancia = radioTierra * c;

                $resultado.textContent = `La distancia entre el shopping DinoMall y el usuario es de: ${distancia}mts`;

            });
        }
    })


    $btnLimpiar.addEventListener("click", () => {
        $ubicacion.textContent = "";
        $resultado.textContent = "";
    });

    



}



