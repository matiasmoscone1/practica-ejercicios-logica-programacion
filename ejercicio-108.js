

//108. Validación de soporte para geolocalización: Crea una página que, al cargar, 
//verifique si el navegador del usuario admite la geolocalización. Si es compatible, 
//muestra las coordenadas geográficas actuales del usuario; de lo contrario, 
//muestra un mensaje indicando que la geolocalización no es compatible.


export default function validacionGeolocalizacion(btnCoords, btnLimpiar, resultado){

    //const locacion = Geolocation();

    //console.log(locacion);

    //creando variables referenciales al DOM
    const $btnCoords = document.querySelector(btnCoords);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton Ver Coords
    $btnCoords.addEventListener("click", () => {

        //haciendo una validacion si el navegador es compatible con el objeto geolocalizacion        
        if(navigator.geolocation){        
            //que de ese objeto extraiga la posicion actual del usuario
            navigator.geolocation.getCurrentPosition((position) => {
                //guardando latitud y longitud en variables para mostrarlas despues por el DOM
                const latitud = position.coords.latitude;
                const longitud = position.coords.longitude;
                //Mostrando resultado por el DOM
                $resultado.innerHTML = `<p>Latitud: ${latitud}</p><p>Longitud: ${longitud}</p>`
            });
        //si el navegador no es compatible con el objeto geolocalizacion, muestra un mensaje en
        //el DOM
        }else{
            $resultado.textContent = "La Geolocalizacion no es compatible con este navegador...";
        }
    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM
        $resultado.textContent = "";
    })



}


