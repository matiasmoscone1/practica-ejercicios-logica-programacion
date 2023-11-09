
//100. Gestión de errores con promesas: Crea una función que simule una llamada a una 
//API que puede arrojar errores. Utiliza promesas y try/catch para manejar los 
//errores de manera adecuada.

export default function gestionErrores(btnLlamar, btnError, btnLimpiar, resultado, error){

    //creando variables referenciales al DOM
    const $btnLlamar = document.querySelector(btnLlamar);
    const $btnError = document.querySelector(btnError);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    const $error = document.querySelector(error);
 
    //creando constantes de URL de prueba y arreglo vacio
    const URL = "https://jsonplaceholder.org/users";
    const URLError = "https://jsonplaceholder.org/uses";
    let datos = [];

    //funcion llamadora de api, recibe por parametro la url a resolver, es una funcion asincrona
    const callAPI = async(url) => {
        //bloque try que intenta resolver la promesa fetch para obtener datos de una api
        try{    
            //fetch con await que una vez que este lista la peticion fetch, termina de ejecutar callAPI
            await fetch(url)
            //guarda la respuesta en formato json
            .then((response) => response.json())
            //mete los datos de la peticion en el arreglo vacio previamente creado
            .then((data) => datos.push(data))
            //llama a la funcion mostrar datos para mostrar datos en DOM
            mostrarDatos();
            //bloque catch que agarra el error
        }catch(err){
            //console.log(`Error al obtener los datos ${err}`);
            //muestra el error en el DOM
            $error.textContent = `Error: "${err}"`;
        }
    }

    const mostrarDatos = () => {
        let filas = "";
        
        for(let i = 0; i <= 10; i++){
            filas += `<tr>
            <td>${datos[0][i].id}</td>
            <td>${datos[0][i].firstname}</td>
            <td>${datos[0][i].lastname}</td>
            <td>${datos[0][i].email}</td>
            </tr>
            `
        }
        $resultado.innerHTML = `<table border="1">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
        </tr>
        ${filas}
        </table>`;
    }

    $btnLlamar.addEventListener("click", () => {
        callAPI(URL);
        //console.log(datos);
    })

    $btnError.addEventListener("click", () => {
        callAPI(URLError);
        //console.log(datos);
    })

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
        $error.textContent = "";
    })


}

