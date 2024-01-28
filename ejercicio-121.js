

//121. Implementación de Promesas: Crea tu propia implementación simplificada de Promesas 
//en JavaScript. Debería ser capaz de manejar las funciones then, catch y finally.


export default function ejercicioPromesa(btnPromesa, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnPromesa = document.querySelector(btnPromesa);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando variable URL que almacenara la url propiamente dicha
    const URL = "https://jsonplaceholder.typicode.com/users";

    //creando array de usuarios donde se almacenara todos los usuarios
    let arrayUsuarios = [];

    //funcion asincrona que llama a la api y realiza un try catch
    const callAPI = async () => {

        //intenta hacerle una peticion a la api mediante la URL de forma que la funcion no va
        //a terminar de ejecutarse hasta que este lista esta peticion, luego se concatena .then en
        //forma de promesas para almacenar todo el contenido de la api en la variable de arrayUsuarios
        try{            
            await fetch(URL)
            .then((response) => response.json())
            .then((data) => {arrayUsuarios = [...data]});
            //maneja el error
        }catch(e){
            console.error('Nombre:', e.name);
            console.error('Mensaje:', e.message);
            console.error('Seguimiento:', e.stack);
            $resultado.innerHTML = `<div>
                <h5>Error ${e.name}</h5>
                <p>Mensaje: ${e.message}</p>
                <p>Seguimiento: ${e.stack}</p>
            </div>`
            //ejecuta siempre el bloque finally
        }finally{
            console.log("Sentencia finalizada...");   
        }

    };

   

    //captando evento click del boton Promesa, la funcion es asincrona para que le de tiempo
    //a la funcion callAPI de recolectar todos los datos
    $btnPromesa.addEventListener("click", async() => {

        //espera a que callAPI junte todos los datos
        await callAPI();

        //console.log(arrayUsuarios);

        //crea la variable vacia
        let mostrarDOM = "";

        //le injecta HTML
        mostrarDOM += `<table border=1>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
        `;

        //recorre el array de usuarios y por cada usuario, rellena la tabla
        arrayUsuarios.map((usuario) => {
            mostrarDOM += `<tr>
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.username}</td>
                <td>${usuario.email}</td>
            </tr>`;
        });

        //termina la estructura HTML de la variable mostrarDOM
        mostrarDOM += `</tbody>
        </table>`;

        //muestra el resultado en el DOM
        $resultado.innerHTML = mostrarDOM;

    });


    //capta el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //borra el resultado del dom y limpia la consola
        $resultado.innerHTML = "";
        console.clear();
    });



}








