
//110. Geolocation API: Implementa una función que calcule la distancia entre 
//la ubicacion del usuario y otros puntos de referencia (3 puntos de referencia de Córdoba)

export default function distanciaGeolocalizacion(btnCalcular, btnLimpiar, ubicacion, resultado){

    const $ubicacion = document.querySelector(ubicacion);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    const dinoMall = {
        latitud: -64.2124859,
        longitud: -31.4287519        
    };
    const kempesEstadio = {
        latitud: -31.3691444, 
        longitud: -64.245944
    };
    const shoppingJockey = {
        latitud: -31.4512894, 
        longitud: -64.182084
    }

    const radioTierra = 6371000;


    const toRadians = (grados) => {
        return grados * (Math.PI / 180);
    }    

    $btnCalcular.addEventListener("click", () => {

        //console.log(navigator.geolocation.getCurrentPosition());

        if(navigator.geolocation){            
            navigator.geolocation.getCurrentPosition((position) => {
                let latUsuario = position.coords.latitude;
                let lonUsuario = position.coords.longitude;
                
                console.log(latUsuario, lonUsuario);
                
                $ubicacion.innerHTML = `Latitud: ${latUsuario} <br> Longitud: ${lonUsuario}`;
    

                latUsuario = toRadians(latUsuario);
                lonUsuario = toRadians(lonUsuario);
                let latDinoMall = toRadians(dinoMall.latitud);
                let lonDinoMall = toRadians(dinoMall.longitud);
            
                const difLatitud = latDinoMall - latUsuario;
                const difLongitud = lonDinoMall - lonUsuario;

                let a = Math.sin(difLatitud / 2) * Math.sin(difLatitud / 2) +
                Math.cos(latUsuario) * Math.cos(latDinoMall) *
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



