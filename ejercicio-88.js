

//88. Realiza lo mismo que en el ejercicio 87, pero que sea un CRUD con javascript
//consultando a la misma API


export default function crudAPI(inputId, inputNombre, inputApellido, inputEmail, btnAgregar, resultado){

    const url = "https://jsonplaceholder.org/users";

    let usuarios = [];

    const $resultado = document.querySelector(resultado);
    const $btnAgregar = document.querySelector(btnAgregar);


    const callApi = async() => {

        await fetch(url)
        .then((response) => response.json())
        .then((data) => {usuarios = [...data]});

        //console.log(usuarios);

    }


    const reutilizar = () => {
        let filas = "";
        for(let i = 0; i < 10; i++){
            filas +=  `<tr>
            <td>${usuarios[i].id}</td>
            <td>${usuarios[i].firstname}</td>
            <td>${usuarios[i].lastname}</td>
            <td>${usuarios[i].email}</td>
            <td><button>Modificar</button></td>
            <td><button>Borrar</button></td>
            </tr>`;    
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
        console.log(filas);
      
    }

    $btnAgregar.addEventListener("click", (e) => {
        e.preventDefault();
        const $inputId = document.querySelector(inputId).value;
        const $inputNombre = document.querySelector(inputNombre).value;
        const $inputApellido = document.querySelector(inputApellido).value;
        const $inputEmail = document.querySelector(inputEmail).value;
        
        const nuevoUsuario = {
            id: $inputId,
            name: $inputNombre,
            username: $inputApellido,
            email: $inputEmail,
        };

        usuarios.push(nuevoUsuario);

        reutilizar();
    });


    


    callApi();
    



}

