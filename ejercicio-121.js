

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

   


    $btnPromesa.addEventListener("click", async() => {

        await callAPI();

        console.log(arrayUsuarios);

        let mostrarDOM = "";

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

        arrayUsuarios.map((usuario) => {
            mostrarDOM += `<tr>
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.username}</td>
                <td>${usuario.email}</td>
            </tr>`;
        });

        mostrarDOM += `</tbody>
        </table>`;

        $resultado.innerHTML = mostrarDOM;


    });


    $btnLimpiar.addEventListener("click", () => {
        $resultado.innerHTML = "";
        console.clear();
    });



}








