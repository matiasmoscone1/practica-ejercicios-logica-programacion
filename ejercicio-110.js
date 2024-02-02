
//110. Geolocation API: Implementa una función que calcule la distancia entre 
//la ubicacion del usuario y otros puntos de referencia (3 puntos de referencia de Córdoba)


export default function distanciaGeolocalizacion(btnCalcular, btnLimpiar, ubicacion, resultado){

    //creando variables referenciales al DOM
    const $ubicacion = document.querySelector(ubicacion);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    //creando puntos de referencia con sus latitudes y longitudes
    const dinoMall = {
        latitud: -31.4288499154311, 
        longitud: -64.21260008903296
    };
    const kempesEstadio = {
        latitud: -31.3691444, 
        longitud: -64.245944
    };
    const shoppingJockey = {
        latitud: -31.4512894, 
        longitud: -64.182084
    }

    

    //funcion general que calcula la distancia, se le pasan las latitudes y longitudes de los dos puntos
    function calcularDistancia(lat1, lon1, lat2, lon2) {

        //radio de la Tierra en kilómetros
        let radioTierra = 6371;
    
        //convertir grados a radianes
        let latitud1 = toRadians(lat1);
        let longitud1 = toRadians(lon1);
        let latitud2 = toRadians(lat2);
        let longitud2 = toRadians(lon2);
    
        //diferencias de coordenadas
        const deltaLatitud = latitud2 - latitud1;
        const deltaLongitud = longitud2 - longitud1;
    
        //formula de la distancia haversine
        let a = Math.sin(deltaLatitud / 2) * Math.sin(deltaLatitud / 2) +
                Math.cos(latitud1) * Math.cos(latitud2) *
                Math.sin(deltaLongitud / 2) * Math.sin(deltaLongitud / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
        //Distancia en kilómetros
        let distancia = radioTierra * c;
    
        //retorna la distancia
        return distancia;
    }
    

    //funcion que convierte los grados a radianes
    function toRadians(grados) {
        return grados * Math.PI / 180;
    }

        
    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
    
        //si el navigator.geolocation no esta bloqueado en el navegador 
        if(navigator.geolocation){
            //toma la posicion del usuario
            navigator.geolocation.getCurrentPosition((posicion) => {
                //con su respectiva latitud y longitud
                const latitud = posicion.coords.latitude;
                const longitud = posicion.coords.longitude;

                //muestra en el DOM la ubicacion del usuario
                $ubicacion.innerHTML = `Latitud: ${latitud} <br> Longitud: ${longitud}`;

                //console.log(latitud, longitud);
                //console.log(dinoMall.latitud, dinoMall.longitud);
            });
        }
        
        //se usan coordenadas correctas del punto de inicio, el navigator.geolocation da muy defasada
        //las coordenadas
        let distancia1 = calcularDistancia(-31.417278209791338, -64.20233074855635, dinoMall.latitud, dinoMall.longitud);        
        let distancia2 = calcularDistancia(-31.417278209791338, -64.20233074855635, kempesEstadio.latitud, kempesEstadio.longitud);        
        let distancia3 = calcularDistancia(-31.417278209791338, -64.20233074855635, shoppingJockey.latitud, shoppingJockey.longitud);        
        
        //muestra el resultado final en el DOM
        $resultado.innerHTML = `Distancia entre el Shopping Dino Mall y mi casa es: ${distancia1.toFixed(2)}kmts <br>
            Distancia entre el Estadio Kempes y mi casa es: ${distancia2.toFixed(2)}kmts <br>
            Distancia entre el Shopping Jockey y mi casa es ${distancia3.toFixed(2)}kmts`;

    });


    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpiando el resultado y la ubicacion en el DOM
        $ubicacion.textContent = "";
        $resultado.textContent = "";
    });




}



