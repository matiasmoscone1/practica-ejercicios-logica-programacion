

//121. Implementación de Promesas: Crea tu propia implementación simplificada de Promesas 
//en JavaScript. Debería ser capaz de manejar las funciones then, catch y finally.


export default function ejercicioPromesa(btnPromesa, btnLimpiar, resultado){


    const $btnPromesa = document.querySelector(btnPromesa);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const URL = "https://jsonplacaeholder.typicode.com/users";

    let arrayUsuarios = [];

    const callAPI = async () => {

        try{            
            await fetch(URL)
            .then((response) => response.json())
            .then((data) => {arrayUsuarios = [...data]});
        }catch(e){
            console.error('Nombre:', e.name);
            console.error('Mensaje:', e.message);
            console.error('Seguimiento:', e.stack);
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








