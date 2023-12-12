
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

    
    function calcularDistancia(lat1, lon1, lat2, lon2) {
        // Radio de la Tierra en kilómetros
        var radioTierra = 6371;
    
        // Convertir grados a radianes
        var latitud1 = toRadians(lat1);
        var longitud1 = toRadians(lon1);
        var latitud2 = toRadians(lat2);
        var longitud2 = toRadians(lon2);
    
        // Diferencias de coordenadas
        var deltaLatitud = latitud2 - latitud1;
        var deltaLongitud = longitud2 - longitud1;
    
        // Fórmula de la distancia haversine
        var a = Math.sin(deltaLatitud / 2) * Math.sin(deltaLatitud / 2) +
                Math.cos(latitud1) * Math.cos(latitud2) *
                Math.sin(deltaLongitud / 2) * Math.sin(deltaLongitud / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
        // Distancia en kilómetros
        var distancia = radioTierra * c;
    
        return distancia;
    }
    
    function toRadians(grados) {
        return grados * Math.PI / 180;
    }

    
    $btnCalcular.addEventListener("click", () => {
        // Ejemplo de uso
        var distancia = calcularDistancia(-31.417360613037857, -64.20233074855635, -31.42878583187493, -64.21263227554054);
        console.log("La distancia entre los dos puntos es: " + distancia + " kilómetros");

    });


    $btnLimpiar.addEventListener("click", () => {
        $ubicacion.textContent = "";
        $resultado.textContent = "";
    });




}



