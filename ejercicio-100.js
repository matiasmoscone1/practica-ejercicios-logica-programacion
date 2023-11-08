
//100. Gestión de errores con promesas: Crea una función que simule una llamada a una 
//API que puede arrojar errores. Utiliza promesas y try/catch para manejar los 
//errores de manera adecuada.

export default function gestionErrores(btnLlamar, btnLimpiar, resultado, error){


    const $btnLlamar = document.querySelector(btnLlamar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    const $error = document.querySelector(error);
 
    const URL = "https://jsonplaceholder.org/users";
    let datos = {};

    const callAPI = () => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => datos = {...data})
        
    }

    
    callAPI();

    console.log(datos);
}

