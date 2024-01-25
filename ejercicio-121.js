

//121. Implementación de Promesas: Crea tu propia implementación simplificada de Promesas 
//en JavaScript. Debería ser capaz de manejar las funciones then, catch y finally.


export default function ejercicioPromesa(btnPromesa, btnLimpiar, resultado){


    const $btnPromesa = document.querySelector(btnPromesa);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const URL = "https://jsonplaceholder.typicode.com/users";

    let arrayUsuarios = [];

    const callAPI = async () => {

        await fetch(URL)
        .then((response) => response.json())
        .then((data) => {arrayUsuarios = [...data]});

    };


    $btnPromesa.addEventListener("click", () => {

        console.log(arrayUsuarios);

        let mostrarDOM = "";

        mostrarDOM += `<table>
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





    });


    callAPI();



}








