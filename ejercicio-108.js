

//108. Validación de soporte para geolocalización: Crea una página que, al cargar, 
//verifique si el navegador del usuario admite la geolocalización. Si es compatible, 
//muestra las coordenadas geográficas actuales del usuario; de lo contrario, 
//muestra un mensaje indicando que la geolocalización no es compatible.


export default function validacionGeolocalizacion(btnCoords, btnLimpiar, resultado){

    //const locacion = Geolocation();

    //console.log(locacion);

    const $btnCoords = document.querySelector(btnCoords);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnCoords.addEventListener("click", () => {
        
        navigator.geolocation.getCurrentPosition((position) => {
            const latitud = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitud,longitude);
        });
    });





}


