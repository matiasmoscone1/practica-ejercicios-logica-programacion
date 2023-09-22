

//87. Crea una promesa que simule una llamada a una API y maneja tanto el caso de 
//éxito como el caso de error. (API JSON)

//https://jsonplaceholder.org/users

export default function datosUsuarios(btnIniciar, btnParar, resultado){

    //creando variable URL que almacenara la url de la api
    const URL = "https://jsonplaceholder.org/users";

    //creando variables referenciales al DOM
    const $btnIniciar = document.querySelector(btnIniciar);
    const $btnParar = document.querySelector(btnParar);
    const $resultado = document.querySelector(resultado);

    //Creando array vacio donde se almacenaran todos los datos de la API
    let datos = [];
    //se crea una bandera donde se pondra en true cuando exista un error
    let error = false;
    let err = {};

    //Creando funcion llamadora de la API, Es una funcion asincrona
    const callAPI = async () => {
        
        //bloque try catch donde intenta hacer el llamado a la api mediante metodo fetch
        try{            
            //se le agrega await con el fin de esperar a que la promesa se ejecute antes de 
            //continuar el codigo 
            await fetch(URL)
            .then((response) => response.json())
            //clona el array de datos de la api al array vacio creado anteriormente
            .then((data) => {datos = [...data]});
            //manipula el error
        }catch(e){
            //$resultado.innerHTML = `Ha ocurrido el error: ${e.message} en ${e.stack}`;
            error = true;
            //console.log(e);
            err = e;
           
        }
        //console.log(datos)

    };

    //captando evento click del boton Iniciar, se pasa una callback asincrona
    $btnIniciar.addEventListener("click", async () => {
        
        //se le agrega await con el fin de esperar a que se ejecute la funcion para no bloquear
        //el codigo
        await callAPI();
        //console.log(datos);

        //Muestra todo el resultado de los usuarios en el DOM
        $resultado.innerHTML = `${datos.map((usuario) => `Nombre: ${usuario.firstname} - Apellido: ${usuario.lastname} - Email: ${usuario.email} <br>`).join("")}`;
        

        //si existe el error, que lo muestre en el DOM
        if(error){
            $resultado.innerHTML = `Error: ${err.message} <br> Stack: ${err.stack}`;
            //console.log(err);
        }
    
    });

    //captando el evento click del boton Limpiar
    $btnParar.addEventListener("click", () => {
        //limpia el resultado en el DOM
        $resultado.innerHTML = "";
    });


}

