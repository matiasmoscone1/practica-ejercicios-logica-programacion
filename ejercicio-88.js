

//88. Realiza lo mismo que en el ejercicio 87, pero que sea un CRUD con javascript
//consultando a la misma API


export default function crudAPI(inputId, inputNombre, inputApellido, inputEmail, btnAgregar, resultado){

    const url = "https://jsonplaceholder.org/users";

    let usuarios = [];

    const $resultado = document.querySelector(resultado);


    const reutilizar = () => {
        let filas = "";
        for(let i = 0; i < 10; i++){
            filas +=  `<tr>
            <td>${usuarios[i].id}</td>
            <td>${usuarios[i].firstname}</td>
            <td>${usuarios[i].lastname}</td>
            <td>${usuarios[i].email}</td>
            </tr>`;    
        }
        return filas;
      
    }

    const callApi = async() => {

        await fetch(url)
        .then((response) => response.json())
        .then((data) => {usuarios = [...data]});

        //console.log(usuarios);

        
        $resultado.innerHTML = `<table border="1" class="resultado-ej-88">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
        </tr>
        ${reutilizar()}
        

        
        
    </table>`;

    }

    callApi();
    



}

