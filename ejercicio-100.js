
//100. Gestión de errores con promesas: Crea una función que simule una llamada a una 
//API que puede arrojar errores. Utiliza promesas y try/catch para manejar los 
//errores de manera adecuada.

export default function gestionErrores(btnLlamar, btnLimpiar, resultado, error){


    const $btnLlamar = document.querySelector(btnLlamar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    const $error = document.querySelector(error);
 
    const URL = "https://jsonplaceholder.org/users";
    let datos = [];

    const callAPI = () => {
        try{    
            fetch(URL)
            .then((response) => response.json())
            .then((data) => datos.push(data))
        }catch(err){
            console.log(`Error al obtener los datos ${err}`);
        }
    }

    $btnLlamar.addEventListener("click", () => {
        callAPI();
        console.log(datos);
    
    })

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
        $error.textContent = "";
    })


}

