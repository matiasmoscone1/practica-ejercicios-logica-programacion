

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
        reutilizar();
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
            <td><button class="btn-borrar" data-id="${usuarios[i].id}">Borrar</button></td>
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
        //console.log(filas);
        
        const $btnBorrar = document.querySelectorAll(".btn-borrar");

        $btnBorrar.forEach(($boton) => {
            $boton.addEventListener("click", () => { 
                const idUsu = $boton.getAttribute("data-id");
                borrarUsuario(idUsu);
                reutilizar();
                console.log(usuarios);
            });
        })

    }

    
    
/*
    $resultado.addEventListener("click", (e) => {
        if(e.target.classList.contains("btn-borrar")){    
            const idUsu = e.target.getAttribute("data-id");
            borrarUsuario(idUsu);
            reutilizar();
            console.log(usuarios);
        }
    });*/


    const borrarUsuario = (idUsuario) => {
        usuarios = usuarios.filter((usuario) => usuario.id !== idUsuario);
        console.log(usuarios);
    }


    $btnAgregar.addEventListener("click", (e) => {
        e.preventDefault();
        const $inputId = document.querySelector(inputId).value;
        const $inputNombre = document.querySelector(inputNombre).value;
        const $inputApellido = document.querySelector(inputApellido).value;
        const $inputEmail = document.querySelector(inputEmail).value;
        
        const nuevoUsuario = {
            id: $inputId,
            firstname: $inputNombre,
            lastname: $inputApellido,
            email: $inputEmail,
        };

        usuarios.unshift(nuevoUsuario);

        console.log(usuarios);

        reutilizar();
    });

    



    callApi();
    



}

