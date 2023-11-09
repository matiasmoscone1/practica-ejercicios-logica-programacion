
//100. Gestión de errores con promesas: Crea una función que simule una llamada a una 
//API que puede arrojar errores. Utiliza promesas y try/catch para manejar los 
//errores de manera adecuada.

export default function gestionErrores(btnLlamar, btnError, btnLimpiar, resultado, error){


    const $btnLlamar = document.querySelector(btnLlamar);
    const $btnError = document.querySelector(btnError);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    const $error = document.querySelector(error);
 
    const URL = "https://jsonplaceholder.org/users";
    let datos = [];

    const callAPI = (url) => {
        try{    
            fetch(url)
            .then((response) => response.json())
            .then((data) => datos.push(data))
        }catch(err){
            console.log(`Error al obtener los datos ${err}`);
        }
    }

    const mostrarDatos = () => {
        let filas = "";
        for(let i = 0; i <= 10; i++){
            filas += `<tr>
            <td>${usuarios[i].id}</td>
            <td>${usuarios[i].firstname}</td>
            <td>${usuarios[i].lastname}</td>
            <td>${usuarios[i].email}</td>
            </tr>
            `
        }
        $resultado.innerHTML = `<table border="1">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
        </tr>
        ${filas}
        </table>`;
    }

    $btnLlamar.addEventListener("click", () => {
        callAPI(URL);
        console.log(datos);



    
    })

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
        $error.textContent = "";
    })


}

