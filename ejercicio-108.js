

//108. Validación de soporte para geolocalización: Crea una página que, al cargar, 
//verifique si el navegador del usuario admite la geolocalización. Si es compatible, 
//muestra las coordenadas geográficas actuales del usuario; de lo contrario, 
//muestra un mensaje indicando que la geolocalización no es compatible.


export default function validacionGeolocalizacion(){

    //const locacion = Geolocation();

    //console.log(locacion);

    // TODAVIA NO HICE EL GIT INIT DE ESTE CODIGO, HACERLO ANTES DE MODIFICARLO

    const geo = navigator.geolocation.getCurrentPosition((position) => {
        const latitud = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitud,longitude);
    });

}


